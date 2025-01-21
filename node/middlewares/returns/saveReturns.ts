import { json } from 'co-body'

import { ReturnService } from '../../services/returns/returnsService'

export async function saveReturn(ctx: Context, next: () => Promise<unknown>) {
  const { req } = ctx
  const body = (await json(req)) as Return
  try {
    const response = await ReturnService(ctx).save(body)
    ctx.status = 201
    ctx.body = response
  } catch (error) {
    console.error(error)
    ctx.status = 400
    ctx.body = { message: error.message }
  }
  ctx.set('Cache-Control', 'no-cache')
  next()
}
