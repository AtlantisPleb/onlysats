import { useState } from 'react'
import { Button, Text, TextStyle, View } from 'react-native'
import { CONTAINER } from '@/components/Authed'
import { useStore } from '@/helpers/store'
import QRCode from 'react-qr-code'

const WalletPage = () => {
  const lnpay = useStore((s) => s.lnpay)
  const invoice = useStore((s) => s.invoice)
  const [invoiceToPay, setInvoiceToPay] = useState('')
  const wallet = useStore((s) => s.wallet)
  const [showWithdraw, setShowWithdraw] = useState(false)
  const generateInvoice = () => {
    lnpay.createInvoice()
  }
  const payInvoice = () => {
    lnpay.payInvoice(invoiceToPay)
  }
  const withdraw = () => {
    setShowWithdraw(true)
  }
  return (
    <View style={CONTAINER}>
      <p className='text-center text-xl leading-relaxed mb-4'>
        Add sats to your wallet!
      </p>
      {!invoice && (
        <Button
          disabled={!wallet}
          onPress={generateInvoice}
          title='Generate invoice (25 sats)'
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

      <p className='text-center text-xl leading-relaxed mt-12 mb-4'>
        Withdraw your sats whenever you want!
      </p>
      {showWithdraw ? (
        <>
          <textarea
            value={invoiceToPay}
            onChange={(e) => setInvoiceToPay(e.target.value)}
            style={{ color: 'black', width: 600, marginBottom: 10, padding: 5 }}
            placeholder='Paste invoice from your external wallet here'
          />
          <Button disabled={!wallet} onPress={payInvoice} title='Pay invoice' />
        </>
      ) : (
        <Button
          disabled={!wallet}
          onPress={withdraw}
          title='Withdraw via invoice'
        />
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
