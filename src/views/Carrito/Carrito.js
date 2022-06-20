import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "../../components/ItemCart";
import { useCartContext } from "../../Context/CartContext";
import {getFirestore, addDoc, collection} from "firebase/firestore"

const Carrito = () => {
   const {cart, totalPrice} = useCartContext();
   const order = {
       buyer: {
           name: 'Carlos',
           email: 'carlosemanuel@gmail.com',
           phone: '2615061783',
           address: 'San Carlos 1234'
       },
       items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
       total: totalPrice(),
    }

   const handleClick = () => {
       const db = getFirestore();
       const ordersCollection = collection(db, 'ordenes');
       addDoc(ordersCollection, order)
       .then(({id}) => console.log(id))
   }
   
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
            <button onClick={handleClick}>Finalizar compra</button>
        </>
    )
}
export default Carrito;