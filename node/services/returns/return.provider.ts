import type { Return } from 'vtex.admin-example'

export class ReturnProvider {
  private context: Context

  private get returnClient() {
    const {
      clients: { returns: returnsClient },
    } = this.context

    return returnsClient
  }

  constructor(context: Context) {
    this.context = context
  }

  public async saveReturn(returns: Return) {
    return this.returnClient.save(returns)
  }

  public async listReturns() {
    return this.returnClient.search()
  }

  public async getReturn(id: string) {
    return this.returnClient.search(id)
  }

  public async getReturnsByUserId(userId: string) {
    return this.returnClient.getByUserId(userId)
  }

  public async stateUpdate(id: string, state: string) {
    return this.returnClient.stateUpdate(id, state)
  }
}
