// Bootstrap modules
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CartItem({ item, onRemove }) {
    return (
        <Row className="align-items-center border rounded p-3 mb-3">
            <Col xs={3}>
                <img
                    src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                    alt={item.name}
                    className="img-fluid rounded"
                />
            </Col>

            <Col xs={5}>
                <h5>{item.name}</h5>
            </Col>

            <Col xs={2}>
                <p className="mb-0">
                    Qty: <strong>{item.quantity}</strong>
                </p>
            </Col>

            <Col xs={2}>
                <Button
                    variant="danger"
                    onClick={() => onRemove(item.id)}
                >
                    Remove
                </Button>
            </Col>
        </Row>
    );
}