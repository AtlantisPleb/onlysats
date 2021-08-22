import { useEffect } from 'react'
import { Button, View } from 'react-native'
import { CONTAINER } from '@/components/Authed'
import { useStore } from '@/helpers/store'

const WalletPage = () => {
  const lnpay = useStore((s) => s.lnpay)
  const invoice = useStore((s) => s.invoice)
  const generateInvoice = () => {
    lnpay.createInvoice()
  }
  console.log('invoice:', invoice)
  return (
    <View style={CONTAINER}>
      <p className='text-center text-xl leading-relaxed mb-4'>
        Load your wallet!
      </p>
      <Button onPress={generateInvoice} title='Generate invoice' />
      {/* <p className='text-center text-xl leading-relaxed'>
        or earn some sats by tweeting about OnlySats!
      </p> */}
    </View>
  )
}

export default WalletPage
