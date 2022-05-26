import React, { useState, useEffect } from 'react'; 
import Title from '../Title';

import ItemList from '../ItemList';

const films = [
    { id:1 , image:"https://www.padelvip.com/blog/wp-content/uploads/PADELVIP-HACK0214421-min.jpg" , title: "Bullpadel Hack"},
    { id:2 , image: "https://www.padeladdict.com/wp-content/uploads/2019/12/bullpadel-vertex-02-2019-portada.jpg" , title: "Bullpadel Vertex"},
    { id:3, image:"https://www.padelnuestro.com/blog/wp-content/uploads/Banner-Cuadrado-Bullpadel-2.jpg", title: "Hack CTRL"},
];


export const ItemListContainer = ({texto}) => {
    
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise( resolve  =>{
            setTimeout (() => {
                resolve(films);
            },3000);
        });
        getData.then(res => setData(res));

    }, [])

    
    return (
        <>
        <Title greeting={texto} />
        
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer; 