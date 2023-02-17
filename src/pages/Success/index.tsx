import { useContext } from "react"
import { Order, ProductsContext } from "../../contexts/ProductsContext"
import illustration from '../../assets/illustration.png'
import { MapPin, CurrencyDollar, Timer } from "phosphor-react"
import { SuccessContainer, SuccessContent, SuccessHead } from "./style"
import { NavLink } from "react-router-dom"

const paymentTranslation = {
    CC: 'Cartão de Crédito',
    CD: 'Cartão de Débito',
    D: 'Dinheiro'
}

export function Success(){
    const { order } = useContext(ProductsContext)
    
    let addr1 = ""
    let addr2 = ""
    let payment = ""

    if(order){
        const { paymentOption, address } = order as Order
        
        addr1 = `Rua ${address.street}, ${address.number}`
        addr2 = `${address.neighborhood} - ${address.city}, ${address.uf.toUpperCase()}`
        payment = paymentTranslation[paymentOption as keyof typeof paymentTranslation]
    }
    
    return(
        <SuccessContainer>
            {order ?
            (<>
                <SuccessHead>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </SuccessHead>
                <SuccessContent>
                    <ul>
                        <li>
                            <span className="deliver"><MapPin size={16} weight="fill"/></span>
                            <div>
                                <p>Entrega em <strong>{addr1}</strong></p>
                                <p>{addr2}</p>
                            </div>
                        </li>
                        <li>
                            <span className="estimate"><Timer size={16} weight="fill"/></span>
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </li>
                        <li>
                            <span className="payment"><CurrencyDollar size={16} weight="fill"/></span>
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>{payment}</strong>
                            </div>
                        </li>
                    </ul>
                    <img src={illustration} alt=""/>
                </SuccessContent>
            </>)
            : 
            (<>
                <p className="no-order">Nenhum pedido foi realizado ainda.</p>
                <NavLink to={"/"}>
                    Faça um pedido
                </NavLink> 
            </>)   
            }
        </SuccessContainer>
    )
}