import { OrderService } from "../../services/orders/ordersService"

export async function getUserById(ctx: Context): Promise<any> {
  try {
    const {
      vtex: {
        route: { params },
      },
    } = ctx
    console.log(params)

    const { email } = params as { email: string }
    console.log(email, "users")
    const order = await OrderService(ctx).getByUser("email")

    ctx.status = 200
    ctx.body = order
  } catch (error) {
    console.error(error)

    ctx.status = 400
    ctx.body = { message: 'Error getting order' }
  }

  ctx.set('Cache-Control', 'no-cache')
  return ctx.body;
}
