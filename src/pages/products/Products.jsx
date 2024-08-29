import { Card, Container, ListGroup } from "react-bootstrap"
import Header from "../../components/Header"
import { useEffect, useState } from "react"
import api from "../../api/api"
import { useNavigate, useSearchParams } from "react-router-dom"
import TOKEN_JWT from "../../Cookie"

function Products() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        api.get(`/products?category=${category}`, {
            headers: {
                Authorization: `Bearer ${TOKEN_JWT}`
            }
        }).then(response => {
            const productsWithImages = response.data.map(product => ({
                ...product,
                imageUrl: null,
            }))
            setData(productsWithImages)

            productsWithImages.forEach(product => {
                loadProductImage(product.id)
            })
        }).catch(err => {
            console.log(err.response.data)
        })
    }, [category])

    const loadProductImage = (id) => {
        api.get(`products/${id}/images`, { responseType: 'blob', headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt-token')}`
        } }).then(response => {
            const imageUrl = URL.createObjectURL(response.data)

            setData(prevData =>
                prevData.map(product =>
                    product.id === id ? { ...product, imageUrl: imageUrl } : product
                )
            )
        }).catch(err => {
            console.log(err)
        })
    }

    const loadProductsCards = () => {
        return data.map(p => (
            <Card key={p.id} style={{ width: '25rem', margin: '10px' }} onClick={() => navigate(`/products/${p.id}`)}>
                <Card.Body>
                    <Card.Img variant="top" src={p.imageUrl || "holder.js/100px180?text=Image cap"} alt={p.name} />
                    <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                            {p.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Categoria: {p.category.name}</ListGroup.Item>
                        <ListGroup.Item>Em estoque: {p.stock}</ListGroup.Item>
                        <ListGroup.Item>Valor: R$ {p.price}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Ver mais</Card.Link>
                        <Card.Link href="#">Adicionar ao carrinho</Card.Link>
                    </Card.Body>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <Header />
            <Container>
                <br />
                <h2>Produtos</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {loadProductsCards()}
                </div>
            </Container>
        </>
    )
}

export default Products
