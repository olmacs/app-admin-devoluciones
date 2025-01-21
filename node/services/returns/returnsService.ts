import { ReturnProvider } from './return.provider'

export const ReturnService = (ctx: Context) => {
  const {
    clients: { returns },
    vtex: { workspace },
  } = ctx

  returns.schema = `0.0.13-${workspace}`

  const returnsProvider = new ReturnProvider(ctx)

  return {
    save: returnsProvider.saveReturn.bind(returnsProvider),
    list: returnsProvider.listReturns.bind(returnsProvider),
    getById: returnsProvider.getReturn.bind(returnsProvider),
    getByUser: returnsProvider.getReturnsByUser.bind(returnsProvider),
    stateUpdate: returnsProvider.updateReturn.bind(returnsProvider),
  }
}
