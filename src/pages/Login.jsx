import { useState } from "react"
import { Button, Col, Container, Form } from "react-bootstrap"
import api from "../api/api"
import { useNavigate } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const login = () => {
        console.log('clicou')
        api.post('/users/login', { email: email, password: password }).then(response => {
            navigate('/home')
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>
            <br />
            <br />
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" required onChange={(e => setPassword(e.target.value))} />
            </Form.Group>

            <Col>
                <Button variant="primary" onClick={login}>
                    Submit
                </Button>
            </Col>
        </Container>
    )
}

export default Login