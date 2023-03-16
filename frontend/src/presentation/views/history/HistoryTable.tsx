// ** React Imports
import { useState, ChangeEvent, useMemo } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Button } from '@mui/material'
import { fetchProspectResult } from '@/services/Datastone'

import _ from 'lodash'
import { timestampToBrazilianDate } from '@/helpers/time'

interface Column {
  id: 'name' | 'datastone_id' | 'quantity' | 'username' | 'status' | 'createdAt' | 'actions'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'username', label: 'Usuário', minWidth: 100 },
  {
    id: 'datastone_id',
    label: 'id',
    minWidth: 85,
    align: 'right'
  },
  {
    id: 'quantity',
    label: 'quantity',
    minWidth: 85,
    align: 'right'
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'criado em',
    minWidth: 160,
    align: 'right'
  },
  {
    id: 'actions',
    label: 'Ações',
    minWidth: 170,
    align: 'right'
  }
]

interface Data {
  name: string
  username: string
  quantity: number
  datastone_id: number
  status: string
  actions: React.ReactNode
  createdAt: string
}

interface FirebaseProspectionSchema {
  cleanFilters: {
    prospect_name: string
  }
  user_owner: {
    name: string
  }
  datastone_id: number
  status: string
  download_link: string
  quantity: number
  createdAt: number
  updatedAt: number
}

function createData(prospectionData: FirebaseProspectionSchema): Data {
  return {
    name: prospectionData.cleanFilters.prospect_name,
    username: prospectionData.user_owner.name,
    quantity: prospectionData.quantity,
    datastone_id: prospectionData.datastone_id,
    status: prospectionData.status,
    createdAt: timestampToBrazilianDate(prospectionData.createdAt),
    actions: (
      <>
        <Button
          variant='contained'
          onClick={async () => {
            const fileResponse = await fetchProspectResult(prospectionData.datastone_id)
            window.location = fileResponse.file
          }}
        >
          Baixar leads
        </Button>
      </>
    )
  }
}

const HistoryTable = ({
  prospectionDataFromFirebase
}: {
  prospectionDataFromFirebase: FirebaseProspectionSchema[]
}) => {
  const rows = useMemo(() => {
    const orderedDocs = _.orderBy(prospectionDataFromFirebase, prospection => prospection.updatedAt || 0, ['desc'])
    const formattedDocs = orderedDocs.map(prospectionData => createData(prospectionData))

    return formattedDocs
  }, [prospectionDataFromFirebase])

  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0
          }
        }}
      >
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.datastone_id}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default HistoryTable
