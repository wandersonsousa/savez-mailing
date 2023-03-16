// ** MUI Imports
import Card from '@mui/material/Card'

// ** Views
import DepositForm from 'src/presentation/views/new-deposit/DepositForm'

const NewMailingPage = () => {
  return (
    <Card>
      <DepositForm />
    </Card>
  )
}

export default NewMailingPage

/** Example Body Request
{
    "name": "test",
    "cities": [],
    "states": [
        "AC"
    ],
    "birthday_months": [],
    "cbo_codes": [
        "252505"
    ],
    "neighborhoodies": [],
    "estimated_income": [
        {
            "lower": "1200.00",
            "upper": "1500.00"
        }
    ],
    "contact_channels": [
        "whatsapp"
    ],
    "estimated_employees": [],
    "estimated_created": [],
    "cnae_codes": [],
    "revenues": [],
    "nature_codes": [],
    "sector_codes": [],
    "capitals": [],
    "vehicles": [],
    "age": {
        "lower": "18",
        "upper": "20"
    },
    "gender": "M",
    "export": false,
    "file_formatting": "excel"
}
 * 
 */
