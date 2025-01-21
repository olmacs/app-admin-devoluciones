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
    return this.returnClient.search(
      {
        page: 1,
        pageSize: 1,
      },
      ['_all'],
      'createdIn DESC',
      `document_id=${id}`
    )
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
    return this.returnClient.update(id, { note, state })
  }
}
