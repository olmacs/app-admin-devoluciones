import { JanusClient, type InstanceOptions, type IOContext } from '@vtex/api'

export default class invoices extends JanusClient {

    private routes = {
        generateInvoice: (oId: string) => `/api/oms/pvt/orders/${oId}/invoice`
    }

    constructor(context: IOContext, options?: InstanceOptions) {
        super(context, {
            ...options,
            headers: {
                VtexIdclientAutCookie: context.adminUserAuthToken ?? context.authToken ?? '',
            },
        })
    }

    public async generateInvoice(oId: string): Promise<any> {
        return this.http.get(this.routes.generateInvoice(oId), {
            metric: 'status-get',
        })
    }

}
