import { IOClients } from '@vtex/api'
import {
  masterDataFor,
} from '@vtex/clients'

import invoices from './invoices'
import orders from './orders'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get returns() {
    return this.getOrSet('returns', masterDataFor<Return>('return'))
  }

  public get orders() {
    return this.getOrSet('orders', orders)
  }

  public get invoices() {
    return this.getOrSet('invoices', invoices)
  }
}
