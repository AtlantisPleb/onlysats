const publicApiKey = 'pak_3v4d6iGupjB63jn7aVdRj4KGmWJU5O6v'

export class Wallet {
  client: any

  constructor() {
    // @ts-ignore
    this.client = LNPay
    this.client.Initialize(publicApiKey)
    console.log('Initialized LNPay client:', this.client)
  }
}
