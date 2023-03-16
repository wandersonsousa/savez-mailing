import { useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/presentation/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/presentation/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
//import Table from 'src/views/dashboard/Table';
import Trophy from 'src/presentation/views/dashboard/Trophy'
import TotalEarning from 'src/presentation/views/dashboard/TotalEarning'
import StatisticsCard from 'src/presentation/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/presentation/views/dashboard/WeeklyOverview'

// ** Utils
import get from 'lodash/get'

// ** App
import { useUser } from '@/context/UserContext'

const Dashboard = () => {
  // ** Context
  const { user } = useUser()
  const profile_balance = get(user, 'credit_balance.whatsapp', 0)

  useEffect(() => {
    window.tolstoyAppKey = 'b715dae7-c1b6-4118-bc93-112b0c567563'
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://code.jivosite.com/widget/iMB1IHhCZu'
    document.head.appendChild(s)

    return () => {
      document.head.removeChild(s)
    }
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy profile_balance={profile_balance} />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='8.000'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Leads capturados'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='R$30'
                title='Quantia depositada'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Mês passado'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='~862'
                trend='negative'
                trendNumber='-18%'
                title='Leads por dia'
                subtitle='Comparado à ontem'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='~5'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                title='Consultas por dia'
                subtitle='Comparado à ontem'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        {/*   <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
