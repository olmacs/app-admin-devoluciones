import { json } from 'co-body'

// import { ReturnService } from '../../services/returns/returnsService'

export async function saveReturn(ctx: Context, next: () => Promise<unknown>) {
  const {
    clients: { returns },
    req,
    vtex: { workspace },
  } = ctx
  const body = (await json(req)) as Return
  try {
    returns.schema = `0.0.13-${workspace}`
    const response = await returns.save(body)
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
