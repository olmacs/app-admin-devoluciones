export default async function getOrders(_: any, { email }: { email: string }, ctx: Context) {
    const { clients: { orders } } = ctx
    try {
        const order = await orders.getOrdersUser(email)
        return order
    } catch (error) {
        console.error(error)
        return { message: 'Error getting order' }
    }
}