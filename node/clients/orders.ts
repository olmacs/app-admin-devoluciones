import { JanusClient, type InstanceOptions, type IOContext } from '@vtex/api'

export default class orders extends JanusClient {

    private routes = {
        getOrdersUsers: (email: string) => `/api/oms/user/orders?clientEmail=${email}`
    }

    constructor(context: IOContext, options?: InstanceOptions) {
        super(context, {
            ...options,
            headers: {
                VtexIdclientAutCookie: context.adminUserAuthToken ?? context.authToken ?? '',
            },
        })
    }

    public async getOrdersUser(email: string): Promise<any> {
        return this.http.get(this.routes.getOrdersUsers(email), {
            metric: 'status-get',
        })
    }

}
