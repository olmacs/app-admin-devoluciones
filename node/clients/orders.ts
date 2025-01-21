import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class Orders extends JanusClient {
  private routes = {
    getOrdersUsers: (email: string) =>
      `/api/oms/user/orders?clientEmail=${email}&page=1&pageSize=15`,
  }

  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        VtexIdclientAutCookie: context.storeUserAuthToken ?? '',
      },
    })
  }

  public async getOrdersUser(email: string): Promise<any> {
    return this.http.get(this.routes.getOrdersUsers(email), {
      metric: 'status-get',
    })
  }
}
