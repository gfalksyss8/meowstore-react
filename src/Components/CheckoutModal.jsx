// Boostrap modules
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CheckoutModal({
    show,
    onClose,
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    onSubmit,
    isValid,
    cart
}) {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John Smith"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isValid={name.length >= 1}
                            isInvalid={name.length < 1}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!email.includes("@")}
                            isValid={email.includes("@")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Delivery Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Street 1"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            isValid={address.length >= 1}
                            isInvalid={address.length < 1}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>

                <Button
                    variant="success"
                    disabled={!isValid}
                    onClick={onSubmit}
                >
                    Submit Order
                </Button>
            </Modal.Footer>
        </Modal>
    )
}