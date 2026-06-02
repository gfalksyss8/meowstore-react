import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import RatingBar from '../Components/RatingBar.jsx'

import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ProgressBar from 'react-bootstrap/ProgressBar'

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

                <aside className="col py-2 my-4 border d-flex flex-column justify-content-center">
                    <RatingBar value={breed.affection_level}/>
                    <p>Affection
                        <i class="bi bi-heart ms-3"></i>
                    </p>

                    <RatingBar value={breed.intelligence}/>
                    <p>Intelligence
                        <i class="bi bi-lightbulb ms-3"></i>
                    </p>

                    <RatingBar value={breed.energy_level}/>
                    <p>Energy Level
                        <i class="bi bi-battery ms-3"></i>
                    </p>

                    <RatingBar value={breed.vocalisation}/>
                    <p>Vocalisation
                        <i class="bi bi-volume-down ms-3"></i>
                    </p>

                    <RatingBar value={breed.stranger_friendly}/>
                    <p>Stranger Friendly
                        <i class="bi bi-person-exclamation ms-3"></i>
                    </p>

                    <RatingBar value={breed.dog_friendly}/>
                    <p>Dog Friendly
                        <i class="bi bi-gitlab ms-3"></i>
                    </p>
                </aside>
            </Row>

            <Row>
                <section className="col py-2 my-4 ">
                    <h2>{breed.name}</h2>
                    <p>{breed.description}</p>
                    <Link to={`/catalog/${breed.id}`}>
                        Visit their page
                    </Link>
                </section>
            </Row>
        </Container>
    )
}