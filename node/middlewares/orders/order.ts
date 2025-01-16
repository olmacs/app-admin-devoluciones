export async function getUserById(ctx: Context, next: () => Promise<any>) {
  const { orders } = ctx.clients

  try {
    const order = await orders.getByUserId(1)

    ctx.status = 200
    ctx.body = order
  } catch (error) {
    console.error(error)

    ctx.status = 400
    ctx.body = { message: 'Error getting order' }
  }

  ctx.set('Cache-Control', 'no-cache')
  await next()
}
