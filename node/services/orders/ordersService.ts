export const OrderService = (ctx: Context) => {
  const {
    clients: { orders },
    vtex: { workspace },
  } = ctx

  orders.schema = `0.3.0-${workspace}`

  return {
    getByUserId: orders.getUserById,
  }
}
