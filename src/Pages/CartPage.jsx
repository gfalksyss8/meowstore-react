import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

import { getCartTotalQuantity } from '../assets/cart'

export default function Cart() {
    return (
        <div className="container py-4 my-2 border text-center">
            <h4 className="text-body">Your Cart</h4>

            <div className="row">
                <section className="col py-2 my-4 border">
                    List of cats
                </section>
            </div>

            <div className="row">
                <aside className="col py-2 my-4 border d-flex flex-column justify-content-center">
                    <h5>Total Quantity: {getCartTotalQuantity()}</h5>
                    <h5>Total Price: x</h5>
                </aside>

                <aside className="col py-2 my-4 border">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="john@example.com" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Delivery Address</Form.Label>
                            <Form.Control type="text" placeholder="Street 1" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group> 

                        <Button className="btn btn-primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </aside>
            </div>
            
        </div>
    )
}