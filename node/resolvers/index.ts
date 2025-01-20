import getAllReturns from './getAllReturns'
import getOrders from './getOrders'
import getReturnBtId from './getReturnById'
import updateReturn from './updateReturn'

export const queries = {
    getOrders,
    getAllReturns,
    getReturnBtId,
}

export const mutations = {
    updateReturn
}