import { ReturnProvider } from './return.provider'

export const ReturnService = (ctx: Context) => {
  const {
    clients: { returns },
    vtex: { workspace },
  } = ctx

  returns.schema = `0.3.0-${workspace}`

  const returnsProvider = new ReturnProvider(ctx)

  return {
    save: returnsProvider.saveReturn,
    list: returnsProvider.listReturns,
    getById: returnsProvider.getReturn,
    getByUser: returnsProvider.getReturnsByUser,
    stateUpdate: returnsProvider.updateReturn,
  }
}
