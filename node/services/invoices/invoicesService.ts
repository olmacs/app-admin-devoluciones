export const InovoiceService = (ctx: Context) => {
  const {
    clients: { invoices },
  } = ctx

  return {
    generateInvoice: (id: string) => invoices.generateInvoice(id),
  }
}
