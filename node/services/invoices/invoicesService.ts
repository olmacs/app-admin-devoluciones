import type { NotificationInput } from '@vtex/clients'

export const InovoiceService = (ctx: Context) => {
  const {
    clients: { invoices },
  } = ctx

  return {
    generateInvoice: (id: string, packageDetail: Partial<NotificationInput>) =>
      invoices.generateInvoice(id, packageDetail),
  }
}
