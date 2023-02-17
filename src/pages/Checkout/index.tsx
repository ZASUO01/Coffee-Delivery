import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { Order, ProductsContext } from '../../contexts/ProductsContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const formValidationSchema = zod.object({
  cep: zod.string().length(9).regex(/^[0-9]{5}-[0-9]{3}$/),
  street: zod.string().min(1),
  number: zod.string().min(1).regex(/^[0-9]*$/),
  neighborhood: zod.string().min(1),
  complement: zod.string().optional(),
  city: zod.string().min(1),
  uf: zod.string().length(2).regex(/^[A-Za-z]{2}$/)
}) 

type FormData = zod.infer<typeof formValidationSchema>

export function Checkout() {
  const { cart, createOrder } = useContext(ProductsContext)
  const [paymentOption, setPaymentOption] = useState('CC')
  
  const buyerDetailsForm = useForm<FormData>({
    resolver: zodResolver(formValidationSchema)
  })

  const navigate = useNavigate()

  const { handleSubmit, reset } = buyerDetailsForm
  const isSubmitDisabled = cart.length > 0 ? false : true


  function handleBuyProducts(data: FormData){
    const order: Order = {
      address: {
        cep: data.cep,
        street: data.street,
        number: data.number,
        complement: data.complement,
        neighborhood: data.neighborhood,
        city: data.city,
        uf: data.uf
      },
      paymentOption
    }
    
    createOrder(order)
    reset()

    navigate('/success')
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
              <CartResume cart={cart}/>
              <button type='submit' disabled={isSubmitDisabled}>
                CONFIRMAR PEDIDO
              </button>
          </FormCard>
        </FormBlock>
      </form>
    </CheckoutContainer>
  )
}
