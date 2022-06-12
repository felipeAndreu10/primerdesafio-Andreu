import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "../../components/ItemCart";
import { useCartContext } from "../../Context/CartContext";


const Carrito = () => {
   const {cart, totalPrice} = useCartContext();
   
    if (cart.length === 0) {
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/Productos'>Hacer compras</Link>
            </>
        );
    }
   
   return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: {totalPrice()}
            </p>
        </>
    )
}
export default Carrito;