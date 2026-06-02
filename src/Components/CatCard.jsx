import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from "react-router-dom";

import addToCart from '../assets/cart'

export default function CatCard({src, breed, origin, ref, state}) {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img className="object-fit-cover rounded" variant="top" height="180px" src={src}/>
            <Card.Body>
                <Card.Title>
                    {breed}
                </Card.Title>
                <Card.Text>
                    {origin}
                </Card.Text>
                <ButtonGroup className="mb-2">
                    <Link className="btn btn-outline-secondary" to={ref}>
                        Visit their page
                    </Link>
                    <Button className="btn btn-primary"
                            onClick={() => addToCart(breed)}>
                        <i className="bi bi-cart2"></i>
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}