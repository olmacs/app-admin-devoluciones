import { IOClients } from '@vtex/api'
import {
  masterDataFor,
  OMS as Orders,
  Invoice as Invoices,
} from '@vtex/clients'
import type { Return } from 'vtex.admin-example'

import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get returns() {
    return this.getOrSet('returns', masterDataFor<Return>('return'))
  }

  public get orders() {
    return this.getOrSet('orders', Orders)
  }

  public get invoices() {
    return this.getOrSet('invoices', Invoices)
  }
}
