import { Button, Text, TextStyle, View } from 'react-native'
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
      {!invoice && (
        <Button onPress={generateInvoice} title='Generate invoice' />
      )}

      {invoice && (
        <View style={{ maxWidth: 500 }}>
          <Text style={TEXT}>Invoice object: {JSON.stringify(invoice)}</Text>

          <Text style={TEXT}>
            Invoice payment_request: {invoice.payment_request}
          </Text>

          <Text style={TEXT}>Amount (sats): {invoice.num_satoshis}</Text>

          <Text style={TEXT}>Memo: {invoice.memo}</Text>
        </View>
      )}

      {/* <p className='text-center text-xl leading-relaxed'>
        or earn some sats by tweeting about OnlySats!
      </p> */}
    </View>
  )
}

export default WalletPage

const TEXT: TextStyle = {
  flex: 1,
  flexWrap: 'wrap',
  marginTop: 20,
  color: 'white',
}
