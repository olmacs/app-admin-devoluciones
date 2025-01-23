import React from 'react'
import { EXPERIMENTAL_Table as Table } from 'vtex.styleguide'
import faker from 'faker'
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
    id: 'name',
    title: 'Name',
  },
  {
    id: 'qty',
    title: 'Qty',
  },
  {
    id: 'costPrice',
    title: 'Cost',
  },
  {
    id: 'retailPrice',
    title: 'Retail',
  },
]

const EXAMPLE_LENGTH = 10
const MOCKED_DATA = [...Array(EXAMPLE_LENGTH)].map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  qty: faker.random.number(),
  costPrice: faker.random.number(),
  retailPrice: faker.random.number(),
}))

const rowClick = ({ rowData }: { rowData: any }) => {
  console.info(`Clicked ${rowData.id}`)
  alert(`Clicked ${rowData.name} from ${rowData.location}`)
}
export default function UsersTable() {
  return (
    <Table
      measures="regular"
      items={MOCKED_DATA}
      columns={columns}
      onRowClick={rowClick}
    />
  )
}
