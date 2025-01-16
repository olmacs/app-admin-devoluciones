export async function getUserById(ctx: Context, next: () => Promise<any>) {
  const { invoices } = ctx.clients

  try {
    const invoice = await invoices.getByUserId(1)

    ctx.status = 200
    ctx.body = invoice
  } catch (error) {
    console.error(error)

    ctx.status = 400
    ctx.body = { message: 'Error getting invoice' }
  }

  ctx.set('Cache-Control', 'no-cache')
  await next()
}
