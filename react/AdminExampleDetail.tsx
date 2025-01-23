import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useMutation } from 'react-apollo'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import './styles.global.css'

import CHANGE_STATE_RETURN from './graphql/ChangeStateReturn.gql'

const AdminExampleDetail: FC<Props> = ({ params }) => {
  const [changeState] = useMutation(CHANGE_STATE_RETURN, {
    variables: {
      dataReturn: {
        state: 'refunded',
        note: 'Cambiado desde el admin de vtex',
        id: params.id,
      },
    },
  })
  return (
    <Layout
      pageHeader={
        <PageHeader title={<FormattedMessage id="admin-example.details" />} />
      }
    >
      <PageBlock variation="full">
        <div>
          Params: <pre>{JSON.stringify(params, null, 2)}</pre>
          <button disabled={params.state === 'refunded'} onClick={changeState}>
            Refund
          </button>
        </div>
      </PageBlock>
    </Layout>
  )
}

interface Props {
  params: any
}

export default AdminExampleDetail
