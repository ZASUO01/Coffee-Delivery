import americano from '../../assets/americano.png'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Minus,
  Plus,
} from 'phosphor-react'
import {
  FormCard,
  CheckoutContainer,
  FormBlock,
  FormCardHead,
  Address,
  InputContainer,
  PaymentOptions,
  BuyQty,
} from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
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
            <Address>
              <InputContainer>
                <input type="text" name="cep" placeholder="CEP" />
              </InputContainer>
              <InputContainer>
                <input type="text" name="street" placeholder="Rua" />
              </InputContainer>
              <InputContainer>
                <input type="text" name="number" placeholder="Número" />
                <input
                  type="text"
                  name="complement"
                  placeholder="Complemento"
                />
              </InputContainer>
              <InputContainer>
                <input type="text" name="neighborhood" placeholder="Bairro" />
                <input type="text" name="city" placeholder="Cidade" />
                <input type="text" name="uf" placeholder="UF" />
              </InputContainer>
            </Address>
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
            <PaymentOptions>
              <button type="button">
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </button>
              <button type="button">
                <Bank size={16} />
                CARTÃO DE DEBITO
              </button>
              <button type="button">
                <Money size={16} />
                DINHEIRO
              </button>
            </PaymentOptions>
          </FormCard>
        </FormBlock>
        <FormBlock>
          <h1>Cafés Selecionados</h1>
          <FormCard>
            <div>
              <img src={americano} />
              <div>
                <p>Expresso Tradicional</p>
                <div>
                  <BuyQty>
                    <button>
                      <Minus size={14} weight="bold" />
                    </button>
                    <input type="number" min={1} value={1} />
                    <button>
                      <Plus size={14} weight="bold" />
                    </button>
                  </BuyQty>
                </div>
              </div>
            </div>
          </FormCard>
        </FormBlock>
      </form>
    </CheckoutContainer>
  )
}
