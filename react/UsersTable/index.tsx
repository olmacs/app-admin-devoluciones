import React from 'react'
import { EXPERIMENTAL_Table as Table, Spinner } from 'vtex.styleguide'
// import faker from 'faker'
import { useQuery } from 'react-apollo'

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

// const EXAMPLE_LENGTH = 10
// const MOCKED_DATA = [...Array(EXAMPLE_LENGTH)].map(() => ({
//   id: faker.random.uuid(),
//   name: faker.name.findName(),
//   qty: faker.random.number(),
//   costPrice: faker.random.number(),
//   retailPrice: faker.random.number(),
// }))

const rowClick = ({ rowData }: { rowData: any }) => {
  console.info(`Clicked ${rowData.id}`)
  alert(`Clicked ${rowData.name} from ${rowData.location}`)
}
export default function UsersTable() {
  const { data, loading, error } = useQuery(GET_RETURNS)
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
