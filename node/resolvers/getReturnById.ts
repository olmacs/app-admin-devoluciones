import { ReturnService } from "../services/returns/returnsService"

export default async function getReturnBtId(_: any, { documentId }: { documentId: string }, ctx: Context) {
    try {
        const order = await ReturnService(ctx).getById(documentId)
        return order
    } catch (error) {
        console.error(error)
        return { message: 'Error getting order' }
    }
}
