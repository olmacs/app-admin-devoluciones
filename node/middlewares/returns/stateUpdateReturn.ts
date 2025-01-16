import { json } from 'co-body'

import { ReturnService } from '../../services/returns/returnsService'
import { Return } from '../../typings/return'

export async function updateCustomer(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    req,
    vtex: {
      route: { params },
    },
  } = ctx

  const { id } = params as { id: string }
  const { state } = (await json(req)) as Return

  try {
    const response = await ReturnService(ctx).stateUpdate(id, state)

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    console.error(error)
    ctx.status = 400
    ctx.body = { message: error.message }
  }

  ctx.set('Cache-Control', 'no-cache')
  await next()
}
