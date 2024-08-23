import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import api from '../api/api'
import { useEffect, useState } from 'react'

function Header() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('/categories')
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchCategories()
    }, [])

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>

                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        {data.map((category) => (
                            <NavDropdown.Item key={category.id} href={`/products?category=${category.name}`}>
                                {category.name}
                            </NavDropdown.Item>
                        ))}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/products">
                            Ver todos
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Carrinho</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
