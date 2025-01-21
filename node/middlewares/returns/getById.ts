import { ReturnService } from '../../services/returns/returnsService'

export async function getById(ctx: Context, next: () => Promise<unknown>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  const { id } = params as { id: string }

  try {
    const response = await ReturnService(ctx).getById(id)

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
