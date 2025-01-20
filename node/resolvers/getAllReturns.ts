import { ReturnService } from "../services/returns/returnsService"

export default async function getAllReturns(_: any, __: any, ctx: Context) {

    try {
        const order = await ReturnService(ctx).list()
        return order
    } catch (error) {
        console.error(error)
        return { message: 'Error getting order' }
    }
}
