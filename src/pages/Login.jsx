import { useState } from "react"
import { Button, Col, Container, Form } from "react-bootstrap"
import api from "../api/api"
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()
            sessionStorage.removeItem('jwt-token') 

    

    const login = async () => {
        try {
            const response = await api.post('/auth', { email, password })
            document.cookie= `jwt-token=${response.data.token}; path=/; secure;`
            navigate('/home')
        } catch (error) {
            setError("Falha no login. Verifique suas credenciais.")
            sessionStorage.removeItem('jwt-token')
        }
    }
    

    return (
        <Container>
            <br />
            <br />
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Col>
                <Button variant="primary" onClick={login}>
                    Submit
                </Button>
            </Col>
        </Container>
    )
}

export default Login
