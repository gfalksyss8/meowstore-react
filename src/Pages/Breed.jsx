// React modules
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Bootstrap modules
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

// Local components
import addToCart from '../assets/cart'

// Cat API setup
const API_URL = "https://api.thecatapi.com/v1/breeds"
const key= "live_T42Boy2MViIi2batz3T2uCvrBuBmsgmmGDHJ8XPlbMh6fUh99TXnPBvVu7Gxkx84"

export default function Breed() {
    const { id } = useParams()

    const [breed, setBreed] = useState(null)
    const [loading, setLoading] = useState(true)

    // Cat API fetch
    useEffect(() => {
            fetch(API_URL, {
                headers: {
                    'x-api-key': key
                }
            })
    
            .then(res => res.json())
            .then(data => {
                if (!data?.[0]) return

                const foundBreed = data.find(b => b.id === id)

                setBreed(foundBreed)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    // Loading page
    if (loading) {
        return (
        <Container className="d-flex justify-content-center py-5">
            <Spinner animation="border" />
        </Container>
        );
    }

    // Incorrect breed nav
    if (!breed) {
        return (
            <div className="container py-4 my-2 border text-center">
                <h4 className="text-body">Invalid breed</h4>
                <p>No breed {breed?.id} found</p>
            </div>
        )
    }

    // Correct page
    return (
        <Container className="py-4 my-2 border text-center">
            <h4 className="text-body">{breed.name}</h4>

            <Row>
                <aside className="col py-2 my-4 border">
                    <img 
                        src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                        alt={breed.name}
                        className="img-fluid"
                    />
                </aside>

                <aside className="col py-2 my-4 border d-flex flex-column justify-content-center">
                    <section className="my-5">
                        <p>Availability: <b>Yes</b></p>
                        <p>Price: <b>500kr</b></p>
                        <Button onClick={() => addToCart(breed)}>
                            Add to Cart<i className="bi bi-cart2 ms-3"></i>
                        </Button>
                    </section>
                </aside>
            </Row>

            <Row>
                <section className="col py-2 my-4 ">
                    <h2>{breed.name}</h2>
                    <p>{breed.description}</p>
                </section>
            </Row>
        </Container>
    )
}