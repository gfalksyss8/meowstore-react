// Bootstrap modules
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

// React modules
import { Link } from 'react-router-dom'

// Context API
import { useCart } from '../context/CartContext'

export default function CatCard({src, breed, origin, breedId}) {
    const { addToCart } = useCart()

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img className="object-fit-cover rounded" variant="top" height="180px" src={src}/>
            <Card.Body>
                <Card.Title>
                    {breed.name}
                </Card.Title>
                <Card.Text>
                    {origin}
                </Card.Text>
                <ButtonGroup className="mb-2">
                    <Link className="btn btn-outline-secondary" to={breedId}>
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