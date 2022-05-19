
import  {Navbar, Container,Nav, NavDropdown} from "react-bootstrap"
import "./Navbar.css"


export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Container className="barra">
    <Navbar.Brand className="titulo" href="/Home">Zona Padel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/Productos">Productos</Nav.Link>
        <Nav.Link href="/Carrito">Carrito</Nav.Link>
        <NavDropdown title="Consultas" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Mail">Iniciar Sesión</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Whatsapp</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}