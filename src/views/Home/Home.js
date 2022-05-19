import { Carousel, ToastContainer, Toast } from "react-bootstrap";
import './Home.css'

export default function Home () {
    return (
        <div className="Home">
             
            <Carousel className= "carrusel">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img1"
                    src="https://allforpadel.com/blog/wp-content/uploads/2021/09/A29I2915-scaled.jpg"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>Adidas Metalbone</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img2"
                    src="https://www.newpadel.net/blog/wp-content/uploads/NEWPADEL-palas-calidad-precio-21.png"
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img3"
                    src="https://cdn.pixabay.com/photo/2021/06/09/05/31/padel-6322450_1280.jpg"
                    alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3>Wilson Bela</h3>
                    <p>La mas buscada</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <ToastContainer>
                <Toast className="toast">
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Zona Padel</strong>
                        <small className="text-muted">Enviado hace 1 min</small>
                    </Toast.Header>
                    <Toast.Body>Bienvenido a nuestra Página Web</Toast.Body>
                </Toast>
            </ToastContainer> */}
           
      </div>
    )
}