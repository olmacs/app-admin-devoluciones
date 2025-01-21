import { ReturnService } from '../../services/returns/returnsService'

export async function getAll(ctx: Context, next: () => Promise<unknown>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  const { email } = params as { email: string }

  try {
    const response = await ReturnService(ctx).getByUser(email)

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    console.error(error)
    ctx.status = 400
    ctx.body = { message: error.message }
  }

  ctx.set('Cache-Control', 'no-cache')
  next()
}
