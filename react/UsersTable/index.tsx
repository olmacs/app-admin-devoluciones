import React from 'react'
import { EXPERIMENTAL_Table as Table, Spinner } from 'vtex.styleguide'
// import faker from 'faker'
import { useQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'

import GET_RETURNS from '../graphql/GetReturn.gql'
/** Columns definition, must be an array */
const columns = [
  {
    /** Prop that this column represents */
    id: 'id',
    /** Title that will appear on Header */
    title: 'ID',
    /** Fixed width */
    width: '3rem',
  },
  {
    id: 'state',
    title: 'Estado',
  },
  {
    id: 'usuario_correo',
    title: 'User',
  },
]

export default function UsersTable() {
  const { data, loading, error } = useQuery(GET_RETURNS)
  const { navigate } = useRuntime()
  const rowClick = ({ rowData }: { rowData: any }) => {
    navigate({
      page: 'admin.app.example-detail',
      params: { ...rowData },
    })
  }
  if (loading) return <Spinner />
  if (error) return <div>{error.message}</div>

  return (
    <Table
      measures="regular"
      items={data.getAllReturns}
      columns={columns}
      onRowClick={rowClick}
    />
  )
}
