import { saveReturn } from './saveReturn'

export const ReturnService = (ctx: Context) => {
  const {
    clients: { returns },
    vtex: { workspace },
  } = ctx
  returns.schema = `0.3.0-${workspace}`
  return {
    save: saveReturn(returns),
    list: async () => customerClient.scroll({ fields: ['_all'] }),
    getByUserId: async () =>{}
    getByDocumentId: async (documentId: string) =>
      customerClient.search(
        {
          page: 1,
          pageSize: 1,
        },
        ['first_name', 'document_id'],
        'createdIn DESC',
        `document_id=${documentId}`
      ),
  }
}
