import type { MasterDataEntity, NotificationInput } from '@vtex/clients'

import type Invoices from '../../clients/invoices'

export class ReturnProvider {
  private returnClient: MasterDataEntity<Return>
  private invoicesClient: Invoices

  constructor(context: Context) {
    const {
      clients: { returns, invoices },
    } = context

    this.returnClient = returns
    this.invoicesClient = invoices
  }

  public async saveReturn(returns: Return) {
    return this.returnClient.save(returns)
  }

  public async listReturns() {
    return this.returnClient.search(
      {
        page: 1,
        pageSize: 1000,
      },
      ['_all'],
      'createdIn DESC'
    )
  }

  public async getReturn(id: string) {
    return this.returnClient.get(id, ['_all'])
  }

  public async getReturnsByUser(email: string) {
    return this.returnClient.search(
      {
        page: 1,
        pageSize: 1,
      },
      ['_all'],
      'createdIn DESC',
      `usuario_correo=${email}`
    )
  }

  public async updateReturn(id: string, state: string, note: string) {
    const { idOrden, ...returnOrder } = await this.getReturn(id)

    if (state === 'refunded') {
      const invoice = this.generateInvoice(returnOrder)

      await this.invoicesClient.generateInvoice(idOrden, invoice)
    }

    return this.returnClient.update(id, { note, state })
  }

  private generateInvoice(
    returnOrder: Partial<Return>
  ): Partial<NotificationInput> {
    const now = new Date()
    const { itemsDevolucion: items = [] } = returnOrder

    return {
      type: 'Input',
      issuanceDate: now.toISOString(),
      invoiceNumber: `DFG-${now.getTime()}`,
      invoiceValue: items.reduce((acc, item) => acc + (Number(item.price)*Number(item.quantity)), 0),
      items: items.map((item) => ({
        id: item.id,
        price: Number(item.price),
        quantity: Number(item.quantity),
      })),
    }
  }
}
