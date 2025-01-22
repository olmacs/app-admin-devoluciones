import { ReturnService } from '../services/returns/returnsService'

export default async function updateReturn(
  _: any,
  { dataReturn }: { dataReturn: bodyUpdate },
  ctx: Context
) {
  try {
    const response = await ReturnService(ctx).stateUpdate(
      dataReturn.id,
      dataReturn.state,
      dataReturn.note
    )

    return response
  } catch (error) {
    console.error(error)

    return { message: 'Error getting order' }
  }
}
