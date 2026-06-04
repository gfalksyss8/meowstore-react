// React modules
import {useEffect, useState } from 'react'

// Local components
import CatCard from '../Components/CatCard.jsx'

// Bootstrap modules
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'

// Cat API setup
const API_URL = "https://api.thecatapi.com/v1/breeds"

export default function Catalog () {
    const [breeds, setBreeds] = useState([])
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12;

    // Search state
    const [searchTerm, setSearchTerm] = useState("")

    // Filtering
    const [allergyFree, setAllergyFree] = useState(false)

    // Cat API fetch
    useEffect(() => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            setBreeds(data)
        })
        .finally(() => {
            setLoading(false)
        });
    }, []);

    // Filter breeds
    const filteredBreeds = breeds.filter(breed =>
        breed.name.toLowerCase().includes(searchTerm)
    )
        .filter(breed => 
            !allergyFree || breed.hypoallergenic === 1
    )

    // Pagination variables
    const totalPages = Math.ceil(filteredBreeds.length / itemsPerPage)
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    const currentBreeds = filteredBreeds.slice(start, end)

    // Loading page
    if (loading) {
        return (
        <Container className="d-flex justify-content-center py-5">
            <Spinner animation="border" />
        </Container>
        );
    }

    // Correct page
    return (
        <Container className="py-4 my-2 border text-center">
            <h4 className="text-body">Catalog</h4>

            <Container className="py-2 my-4">

                <Row className="mb-3 align-items-end">
                    <Col md={6} className="d-flex align-items-center">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="Search breed by name..." value={searchTerm} 
                                    onChange={(e) => { setSearchTerm(e.target.value.toLowerCase()); setCurrentPage(1) }}/>
                    </Col>
                    
                    <Col md={6} className="d-flex align-items-center">
                    <Form.Check type="checkbox" label="Non-allergic" checked={allergyFree} 
                                onChange={(e) => { setAllergyFree(e.target.checked); setCurrentPage(1)}}
                                className="d-flex align-items-center gap-2 m-2 big-check"/>
                    </Col>
                </Row>

                <Row className="g-4 justify-content-center">

                {/* Map all breeds into CatCards */}
                {currentBreeds.map(breed => (
                    <Col
                        key={breed.id}
                        xs={12}
                        md={6}
                        lg={3}
                        className="d-flex justify-content-center"
                    >
                        <CatCard
                        breed={breed}
                        origin={breed.origin}
                        src={
                            breed.reference_image_id
                            ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
                            : "https://placehold.co/300x180"
                        }
                        breedId={breed.id}
                        />
                    </Col>
                ))}
                </Row>
            </Container>

            {/* Pagination */}
            <Pagination className="justify-content-center mt-5">

                {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;

                return (
                    <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                    >
                    {page}
                    </Pagination.Item>
                );
                })}

            </Pagination>

        </Container>
    )
}