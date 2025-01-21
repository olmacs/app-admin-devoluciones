import { OrderService } from '../../services/orders/ordersService'

export async function getUserById(ctx: Context, next: () => Promise<unknown>) {
  try {
    const {
      vtex: {
        route: { params },
      },
    } = ctx

    const { email } = params as { email: string }
    const order = await OrderService(ctx).getByUser(email)

    ctx.status = 200
    ctx.body = order
  } catch (error) {
    console.error(error)

    ctx.status = 400
    ctx.body = { message: 'Error getting order' }
  }

  ctx.set('Cache-Control', 'no-cache')
  next()
}
