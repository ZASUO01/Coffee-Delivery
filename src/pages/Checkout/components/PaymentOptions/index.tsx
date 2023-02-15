import { PaymentButton, PaymentOptionsContainer } from './style'
import { Bank, CreditCard, Money, } from 'phosphor-react'

interface PaymentOptionsProps {
    paymentOption: string,
    setPaymentOption: React.Dispatch<React.SetStateAction<string>>
}

export function PaymentOptions({ paymentOption, setPaymentOption}: PaymentOptionsProps){
    
    function checkOptionActive(option: string): boolean{
        if(option === paymentOption) return true
        return false
    }
    
    return(
        <PaymentOptionsContainer>
              <PaymentButton type="button" active={checkOptionActive('CC')} onClick={()=>setPaymentOption('CC')}>
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </PaymentButton>
              <PaymentButton type="button" active={checkOptionActive('CD')} onClick={()=>setPaymentOption('CD')}>
                <Bank size={16} />
                CARTÃO DE DEBITO
              </PaymentButton>
              <PaymentButton type="button" active={checkOptionActive('D')} onClick={()=>setPaymentOption('D')}>
                <Money size={16} />
                DINHEIRO
              </PaymentButton>
            </PaymentOptionsContainer>
    )
}