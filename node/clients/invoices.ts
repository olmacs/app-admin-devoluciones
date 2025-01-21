import { JanusClient } from '@vtex/api'
import type { InstanceOptions, IOContext } from '@vtex/api'
import type { NotificationInput, NotificationResponse } from '@vtex/clients'

export default class Invoices extends JanusClient {
  private routes = {
    generateInvoice: (oId: string) => `/api/oms/pvt/orders/${oId}/invoice`,
  }

  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        VtexIdclientAutCookie:
          context.adminUserAuthToken ?? context.authToken ?? '',
      },
    })
  }

  public async generateInvoice(
    orderId: string,
    packageDetail: Partial<NotificationInput>
  ): Promise<NotificationResponse> {
    return this.http.post(this.routes.generateInvoice(orderId), packageDetail)
  }
}
