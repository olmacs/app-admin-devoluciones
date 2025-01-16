export const OrderService = (ctx: Context) => {
  const {
    clients: { invoices },
    vtex: { workspace },
  } = ctx

  invoices.schema = `0.3.0-${workspace}`

  return {
    getByUserId: invoices.getUserById,
  }
}
