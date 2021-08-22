const publicApiKey = 'pak_3v4d6iGupjB63jn7aVdRj4KGmWJU5O6v'

export class Wallet {
  client: any
  set: any

  constructor(set: any) {
    this.set = set
    // @ts-ignore
    this.client = typeof LNPay === 'undefined' ? null : LNPay
    if (!this.client) return
    this.client.Initialize(publicApiKey)
    console.log('Initialized LNPay client:', this.client)
  }

  createWallet(ceramic: any) {
    const callback = async (result: any) => {
      this.set({ wallet: result })
      await ceramic.uploadSecret(result)
      console.log('SET:', result)
    }

    this.client.createWallet({ user_label: 'Test wallet 2' }, callback)
  }
}
