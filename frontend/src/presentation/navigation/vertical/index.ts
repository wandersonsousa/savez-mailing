// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import ClipboardList from 'mdi-material-ui/ClipboardList'
import CloudSearchOutline from 'mdi-material-ui/CloudSearchOutline'
import Domain from 'mdi-material-ui/Domain'

// ** Type import
import { VerticalNavItemsType } from 'src/presentation/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Nova prospecção',
      icon: CloudSearchOutline,
      path: '/dashboard/new-mailing'
    },
    {
      title: 'Prospecção Empresas',
      icon: Domain,
      path: '/dashboard/mailing-companies'
    },
    {
      sectionTitle: 'Registros'
    },
    {
      title: 'Suas prospecções',
      icon: ClipboardList,
      path: '/dashboard/history'
    },
    {
      title: 'Extrato',
      icon: CurrencyUsd,
      path: '/dashboard/extract'
    }

    /*


    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },

    {
      sectionTitle: 'User Interface'
    },

    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    } */
  ]
}

export default navigation
