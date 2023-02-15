import { Trash } from "phosphor-react";
import { useContext } from "react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import { CartProduct, ProductsContext} from "../../../../contexts/ProductsContext";
import { Actions, CardComponent, Details, Info } from "./style";

interface CardProps{
    cartProduct: CartProduct
}

export function Card({cartProduct}: CardProps){
    const imageUrl = `src/assets/${cartProduct.product.imageUrl}`
    const { updateCartProduct, removeCartProduct } = useContext(ProductsContext)

    function changeQty(qty: number){
        const newQty = cartProduct.quantity + qty
        updateCartProduct(cartProduct.product.id, newQty)
    }

    function deleteProduct(){
        removeCartProduct(cartProduct.product.id)
    }

    const currentPrice = (cartProduct.product.price * cartProduct.quantity).toFixed(2)

    return (
    <CardComponent>
        <Info>
            <img src={imageUrl} alt=""/>
            <Details>
                <p>{cartProduct.product.title}</p>
                <Actions>
                    <QuantitySelector currentQty={cartProduct.quantity} changeQty={changeQty} selectortHeight="sm" />
                    <button type="button" onClick={deleteProduct} className="btn">
                        <Trash size={16}/>
                        REMOVER
                    </button>
                </Actions>
            </Details>
        </Info>
        <span>R$ {currentPrice}</span>
    </CardComponent>    
    )
}