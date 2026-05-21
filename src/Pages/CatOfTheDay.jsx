import { useEffect, useState } from 'react'

import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const API_URL = "https://api.thecatapi.com/v1/images/search?has_breeds=1"
const key= "live_T42Boy2MViIi2batz3T2uCvrBuBmsgmmGDHJ8XPlbMh6fUh99TXnPBvVu7Gxkx84"

export default function Cotd() {
    const [breed, setBreed] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'x-api-key': key
            }
        })

        .then(res => res.json())
        .then(data => {
            if (!data?.[0]) return

            const cat = data[0];

            setImageUrl(cat.url)

            if (cat.breeds?.length > 0) {
                setBreed(cat.breeds[0])
            }
        })

        .finally(() => {
            setLoading(false)
        })
    }, [])

    
    if (loading) {
        return (
            <Container className="d-flex justify-content-center py-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    if (breed === null) {
        return (
            <Container className="d-flex justify-content-center py-5">
                <p>Fetch failed</p>
            </Container>
        )
    }

    return (
        <Container className="py-4 my-2 border text-center">
            <h4 className="text-body">Cat of the Day</h4>

            <Row>
                <aside className="col py-2 my-4 border">
                    <img 
                        src={imageUrl}
                        alt={breed.name}
                        className="img-fluid"
                    />
                </aside>

                <aside className="col py-2 my-4 border">
                    <p>stats</p>
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