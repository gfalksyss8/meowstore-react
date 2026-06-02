import {useEffect, useState } from 'react'

import CatCard from "../Components/CatCard.jsx"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'
import Spinner from 'react-bootstrap/Spinner'

const API_URL = "https://api.thecatapi.com/v1/breeds"

export default function Catalog () {
    const [breeds, setBreeds] = useState([])
    const [loading, setLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 12;

    useEffect(() => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            setBreeds(data);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    const totalPages = Math.ceil(breeds.length / itemsPerPage);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const currentBreeds = breeds.slice(start, end);

    if (loading) {
        return (
        <Container className="d-flex justify-content-center py-5">
            <Spinner animation="border" />
        </Container>
        );
    }

    return (
        <Container className="py-4 my-2 border text-center">
            <h4 className="text-body">Catalog</h4>

            <Container className="py-2 my-4">
                <Row className="g-4 justify-content-center">

                {currentBreeds.map(breed => (
                    <Col
                        key={breed.id}
                        xs={12}
                        md={6}
                        lg={3}
                        className="d-flex justify-content-center"
                    >
                        <CatCard
                        breed={breed.name}
                        origin={breed.origin}
                        src={
                            breed.reference_image_id
                            ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
                            : "https://placehold.co/300x180"
                        }
                        ref={breed.id}
                        />
                    </Col>
                ))}
                </Row>
            </Container>

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