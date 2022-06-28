import React, { useState, useEffect } from 'react'; 
import Title from '../Title';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import {collection, getFirestore, getDocs} from "firebase/firestore";
import "./ItemListContainer.css";
import { Container, Row, Col } from 'react-bootstrap';


export const ItemListContainer = ({texto}) => { 
    
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    

    
    useEffect(() => {
        
        const querydb = getFirestore()
        const queryCollection = collection(querydb, "productos") 
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        
    },[categoriaId]);
    
    return (
        <Container className = "producto">
            <Row> 
            <Title greeting={texto} />
            </Row>
            
            <ItemList  data={data} />
            
        
        </Container>
    );
}



export default ItemListContainer; 