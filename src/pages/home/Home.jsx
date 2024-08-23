import { Container } from "react-bootstrap"
// import { useEffect } from "react"
// import api from "../../api/api"
import Header from "../../components/Header"

function Home() {

    // useEffect(() => {
    //     api.get('/products').then(response => {
    //         console.log(response)
    //     }).catch(error => console.log(error))

    // }, [])

    return (
        <>
            <Header />
            <Container>
                <br />
                {/* <h3>Destaques</h3> */}

            </Container>

        </>
    )
}

export default Home