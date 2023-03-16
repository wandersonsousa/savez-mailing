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
import { ReactNode } from 'react'
import AdminLayout from '@/presentation/layouts/AdminLayout'

const Dashboard = () => {
  // ** Context
  const { user } = useUser()
  const profile_balance = get(user, 'credit_balance.whatsapp', 0)

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
      </Grid>
    </ApexChartWrapper>
  )
}

Dashboard.getLayout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>

export default Dashboard
