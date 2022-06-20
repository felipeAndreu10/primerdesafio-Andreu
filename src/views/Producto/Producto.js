import React from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import ItemDetailContainer from "../../components/Item.DetailContainer";



export default function Producto () {
    const {productId} = useParams();
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <ItemDetailContainer title="Mi producto" productId={productId} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}