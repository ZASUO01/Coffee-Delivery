import { useContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { ProductsContext } from '../../contexts/ProductsContext'
import {
  CurrencyDollar,
  MapPinLine,
} from 'phosphor-react'
import {
  FormCard,
  CheckoutContainer,
  FormBlock,
  FormCardHead,
} from './style'
import { Address } from './components/Address'
import { PaymentOptions } from './components/PaymentOptions'
import { CartResume } from './components/CartResume'


export function Checkout() {
  const { cartState } = useContext(ProductsContext)
  const [paymentOption, setPaymentOption] = useState('')
  
  const buyerDetailsForm = useForm({

  })

  const { handleSubmit, reset } = buyerDetailsForm
  const isSubmitDisabled = cartState.length > 0 ? false : true

  function handleBuyProducts(){
    reset()
  }

  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmit(handleBuyProducts)}>
        <FormBlock>
          <h1>Complete seu pedido</h1>
          <FormCard>
            <FormCardHead iconColor="yellow">
              <MapPinLine size={22} />
              <div>
                <strong>Endereço de entrega </strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormCardHead>
            <FormProvider {...buyerDetailsForm}>
              <Address />
            </FormProvider>
          </FormCard>
          <FormCard>
            <FormCardHead iconColor="purple">
              <CurrencyDollar size={22} />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormCardHead>
            <PaymentOptions paymentOption={paymentOption} setPaymentOption={setPaymentOption}/>
          </FormCard>
        </FormBlock>
        <FormBlock>
          <h1>Cafés Selecionados</h1>
          <FormCard>
              <CartResume cartState={cartState}/>
              <button type='submit' disabled={isSubmitDisabled}>
                CONFIRMAR PEDIDO
              </button>
          </FormCard>
        </FormBlock>
      </form>
    </CheckoutContainer>
  )
}
