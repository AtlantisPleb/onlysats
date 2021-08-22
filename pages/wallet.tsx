import { Button, Text, TextStyle, View } from 'react-native'
import { CONTAINER } from '@/components/Authed'
import { useStore } from '@/helpers/store'
import QRCode from 'react-qr-code'

const WalletPage = () => {
  const lnpay = useStore((s) => s.lnpay)
  const invoice = useStore((s) => s.invoice)
  const wallet = useStore((s) => s.wallet)
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
        <Button
          disabled={!wallet}
          onPress={generateInvoice}
          title='Generate invoice (50 sats)'
        />
      )}

      {invoice && (
        <View
          style={{
            maxWidth: 500,
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <QRCode value={invoice.payment_request} />
          </View>

          <Text style={TEXT}>{invoice.payment_request}</Text>

          <Text style={{ ...TEXT, textAlign: 'center' }}>
            Pay the invoice then refresh the page!
          </Text>
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
