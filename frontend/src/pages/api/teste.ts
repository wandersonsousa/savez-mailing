import { getBy, update } from '@/pages/api/helpers/firebase'
import axios from 'axios'

export default async function handler(req: any, res: any) {
  const prospect = await getBy('prospects', 'datastone_id', 35701)

  res.status(200).json({ done: true, data: prospect })
}
