import "./item.css";
import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { useCartContext } from "../../Context/CartContext";

const Item = ({info}) => {
    
    const nombre = useContext(useCartContext);
    console.log('Item: ', nombre);

    return (
        <Link to={`/detalle/${info.id}`} className="film"> 
        <img src={info.image} alt="" />
        <p>{info.title}</p>
        </Link>
    );
}

export default Item; 