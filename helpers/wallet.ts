const publicApiKey = 'pak_3v4d6iGupjB63jn7aVdRj4KGmWJU5O6v'

// TODO: this actually exports as lnpay, need to unconfuse this
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
  }

  payInvoice(invoiceToPay: string) {
    // console.log('About to pay', invoiceToPay)
    if (!this.wallet) return
    this.wallet.payInvoice(
      { payment_request: invoiceToPay },
      function (result: any) {
        console.log(result)
        alert(JSON.stringify(result))
      }
    )
  }

  async chargeVideoView(amount: number, walletId: string) {
    if (!this.wallet) return
    // console.log('CHARGING ', amount, walletId)

    const params = {
      dest_wallet_id: walletId,
      num_satoshis: amount,
      memo: 'Watchin ur vid on OnlySats',
    }
    this.wallet.internalTransfer(params, function (result: any) {
      console.log(result)
    })

    await sleep(1000)
    this.updateBalance()
  }

  setWallet(wallet: any) {
    const key = wallet.access_keys['Wallet Admin'][0]
    // @ts-ignore
    const lnwallet = new LNPayWallet(key)
    this.wallet = lnwallet
    this.updateBalance()
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
      // console.log('SET:', result)
      ceramic.uploadSecret(result)
    }

    this.client.createWallet({ user_label: 'Test wallet 2' }, callback)
  }

  createInvoice() {
    // console.log('this.client is:', this.client)
    const callback = async (result: any) => {
      this.set({ invoice: result })
    }

    this.wallet.createInvoice(
      { num_satoshis: 50, memo: 'Load OnlySats wallet' },
      callback
    )
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
