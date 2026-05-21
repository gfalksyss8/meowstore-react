import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function CatCard({src, breed, origin, ref}) {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img className="object-fit-cover rounded" variant="top" height="180px" src={src}/>
            <Card.Body>
                <Card.Title>{breed}</Card.Title>
                <Card.Text>
                {origin}
                </Card.Text>
                <ButtonGroup className="mb-2">
                    <Button variant="outline-secondary">Visit their page</Button>
                    <Button variant="primary">
                        <i className="bi bi-cart2"></i>
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}