const publicApiKey = 'pak_3v4d6iGupjB63jn7aVdRj4KGmWJU5O6v'

export class Wallet {
  client: any
  set: any
  wallet: any

  constructor(set: any) {
    this.set = set
    // @ts-ignore
    this.client = typeof LNPay === 'undefined' ? null : LNPay
    if (!this.client) return
    this.client.Initialize(publicApiKey)
    console.log('Initialized LNPay client:', this.client)

    // const walletAccessKey = process.env.NEXT_PUBLIC_WALLET_ACCESS_KEY
    // @ts-ignore
    // let myWallet = new LNPayWallet(walletAccessKey)
    // this.wallet = myWallet
    // this.updateBalance()
    // this.set({ wallet: myWallet })
    // console.log(myWallet)
  }

  updateBalance() {
    if (!this.wallet) return
    const callback = async (result: any) => {
      this.set({ wallet: result })
    }

    this.wallet.getInfo(callback)
  }

  createWallet(ceramic: any) {
    const callback = async (result: any) => {
      this.set({ wallet: result })
      this.wallet = result
      console.log('SET:', result)
      ceramic.uploadSecret(result)
    }

    this.client.createWallet({ user_label: 'Test wallet 2' }, callback)
  }

  createInvoice() {
    console.log('this.client is:', this.client)
    const callback = async (result: any) => {
      this.set({ invoice: result })
    }

    this.wallet.createInvoice(
      { num_satoshis: 50, memo: 'Load OnlySats wallet' },
      callback
    )
  }
}
