export const OrderService = (ctx: Context) => {
  const {
    clients: { orders },
  } = ctx

  return {
    getByUser: (email: string) => orders.getOrdersUser(email),
  }
}
