
import { Card, Button } from "react-bootstrap";
import "./Productos.css";

export default function Productos() {
    return (
        <div className="grid">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src="https://www.padelnuestro.com/images/cargador/productos/imagen-1-25653-0faf6c8f-26849-NORMAL.jpg" />
                <Card.Body>
                <Card.Title>Metalbone</Card.Title>
                <Card.Text>
                La paleta usada por el mejor jugador del mundo Ale Galan
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src="https://www.padelnuestro.com/images/cargador/productos/imagen-1-26106-4e9859f9-27095-NORMAL.jpg" />
                <Card.Body>
                <Card.Title>Bulpadel Hack 2022</Card.Title>
                <Card.Text>
                Paleta mas comprada en el mundo
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/nox-at10-genius-attack-18k-20221-e3a4048a732c751ce116503984780166-480-0.jpg" />
                <Card.Body>
                <Card.Title>Nox AT Genius</Card.Title>
                <Card.Text>
                Paleta usada por Agustín Tapia, mejor jugador joven del circuito
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src="https://www.padelnuestro.com/images/cargador/productos/imagen-1-26109-01cc7451-27096-NORMAL.jpg" />
                <Card.Body>
                <Card.Title>Bullpadel Vertex 2022</Card.Title>
                <Card.Text>
                Paleta más elegida por los profesionales
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/150076296-71a43c7359aafabbb116039124428474-640-0.jpg" />
                <Card.Body>
                <Card.Title>Babolat Viper Carbon</Card.Title>
                <Card.Text>
                Paleta de Juan Lebron, pareja de Ale Galan
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/951/243/products/varlion-bourne-summum1-55e411bb76ca04d61e16262050402823-480-0.png" />
                <Card.Body>
                <Card.Title>Varlion Cañon difusor</Card.Title>
                <Card.Text>
                Mejor Paleta calidad precio
                </Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}