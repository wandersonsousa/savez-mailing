import { NextApiRequest, NextApiResponse } from 'next/types'
import { getBy, update } from '@/pages/api/helpers/firebase'
import { buffer } from 'micro'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const updateProspectStatus = async (job_id: string | number, status: string) => {
    const prospect = await getBy('prospects', 'datastone_id', Number(job_id))
    console.log('founded prospect', prospect)
    console.log('job_id', job_id)
    console.log('status', status)

    if (!prospect) {
      return false
    }
    if (prospect.status === 'done') {
      return false
    }
    if (status === 'requested') {
      if (prospect.status === 'requested') {
        await update('prospects', prospect.id, { status: 'requested' })
      }
    }

    if (status === 'error') {
      const profile_owner_uid = prospect.user_owner.uid
      const credits_used_by_prospect = prospect.quantity

      const profile = await getBy('profiles', 'uid', profile_owner_uid)
      const profile_credits = Number(profile.credit_balance.whatsapp)

      const new_profile_credits = profile_credits + credits_used_by_prospect

      await update('profiles', profile_owner_uid, {
        credit_balance: {
          whatsapp: new_profile_credits
        }
      })
      if (prospect.status === 'requested') {
        await update('prospects', prospect.id, { status: 'error' })
      }
    }

    if (status === 'done') {
      const profile_owner_uid = prospect.user_owner.uid
      const credits_used_by_prospect = prospect.quantity

      const profile = await getBy('profiles', 'uid', profile_owner_uid)
      const profile_credits = Number(profile.credit_balance.whatsapp)

      const new_profile_credits = profile_credits - credits_used_by_prospect

      await update('profiles', profile_owner_uid, {
        credit_balance: {
          whatsapp: new_profile_credits
        }
      })

      const job_response = await axios.get(`https://api.datastone.com.br/v1/prospection/${job_id}/result/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
        }
      })
      const { file } = job_response.data || { file: '' }

      if (prospect.status === 'requested' || prospect.status === 'error') {
        await update('prospects', prospect.id, { download_link: file })
        await update('prospects', prospect.id, { status: 'done' })
      }
    }
  }

  console.log('new request received')
  if (req.method === 'POST') {
    const rawBody = (await buffer(req)).toString()
    const { job_id, status } = JSON.parse(rawBody)
    const success = await updateProspectStatus(job_id, status)
    if (success === false) {
      res.status(401).json({
        message: 'Prospect not found'
      })
    }
  }

  res.status(200).json({ done: true })
}

export const config = {
  api: {
    bodyParser: false
  }
}

/**
 *
 * Problemas estão no metódo update do firebase helper, e a primeeira chamada do webhook o objeto prospect pode não ter sido criado ainda no backend
 */

/* 
// create prospect
{
  "job_id": 35965,
  "job_type": "prospecting",
  "status": "requested"
}

// done prospect
{
  "job_id": 35965,
  "job_type": "prospecting",
  "status": "done"
}
*/
