import { method } from '@vtex/api'

import { orders } from './orders'
import { returns } from './returns'

export const middlewares = {
  orders: method({
    GET: [orders.getUserById],
  }),
  returns: method({
    GET: [returns.getAll],
    POST: [returns.saveReturn],
  }),
  returnsbyId: method({
    GET: [returns.getById],
  }),
}
