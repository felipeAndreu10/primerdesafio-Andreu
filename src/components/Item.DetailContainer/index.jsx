import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';

const film = { id:1 , image:"https://www.padelvip.com/blog/wp-content/uploads/PADELVIP-HACK0214421-min.jpg" , title: "Bullpadel Hack"};


export const ItemDetailContainer = () => {

    const [data, setData] = useState ({});

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve (film);
            },3000);
        });
        getData.then(res=> setData(res));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;