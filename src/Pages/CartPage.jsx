// Bootstrap modules
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

// React modules
import { useState } from 'react'
import { useEffect } from 'react'

// Own components
import { removeFromCart } from '../assets/cart'
import CartItem from "../Components/CartItem"
import { getCart } from "../assets/cart"

export default function Cart() {
    const [show, setShow] = useState(false)
    const [cart, setCart] = useState(getCart())

    useEffect(() => 
    {
        const updateCart = () => setCart(getCart())

        window.addEventListener("cartUpdated", updateCart)

        return () => {
            window.removeEventListener("cartUpdated", updateCart)
        }
    }, [])

    // Summary states
    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )
    const totalPrice = cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    )

    // Form states
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const isValid = 
        name.trim().length >= 1 &&
        email.includes("@") &&
        address.trim().length >= 1

    return (
        <div className="container py-4 my-2 border text-center">
            <h4 className="text-body">Your Cart</h4>

            {/* Always on top toast for order */}
            <ToastContainer position="top-center" className="position-fixed top-5 start-50 translate-middle-x p-3">
                <Toast className="d-inline-block m-2" bg="success" onClose={() => setShow(false)} show={show}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Meow Store</strong>
                        <small>Confirm</small>
                    </Toast.Header>
                    <Toast.Body>
                        <b>Success!</b> Your order has been confirmed.<br/>
                        Order Details:
                        <ul>
                            {cart.map(item => (
                                <li>{item.name} x{item.quantity}</li>
                            ))}
                        </ul>
                        Customer Details:
                            <ul>
                                <li>{name}</li>
                                <li>{email}</li>
                                <li>{address}</li>
                            </ul>
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            {/* Each item in cart */}
            <div className="row">
                <section className="col py-2 my-4">
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={removeFromCart}
                        />
                    ))}
                </section>
            </div>

            <div className="row">
                {/* Cart Summary */}
                <aside className="col py-2 my-4 border d-flex flex-column justify-content-center">
                    <h5>Total Quantity: {totalQuantity}</h5>
                    <h5>Total Price: {totalPrice} kr</h5>
                </aside>

                {/* Submission form */}
                <aside className="col py-2 my-4 border">
                    <Form onSubmit={(e) => { e.preventDefault(); setShow(true)}}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" 
                                            value={name} onChange={(e) => setName(e.target.value)} 
                                            isValid={name.length >= 1} isInvalid={name.length < 1}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="john@example.com" 
                                            value={email} onChange={(e) => setEmail(e.target.value)} 
                                            isValid={email.length >= 3} isInvalid={email.length < 3 && !email.includes("@")}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Delivery Address</Form.Label>
                            <Form.Control type="text" placeholder="Street 1" 
                                            value={address} onChange={(e) => setAddress(e.target.value)}
                                            isValid={address.length >= 1} isInvalid={address.length < 1}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group> 

                        <Button className="btn btn-success" type="submit" disabled={!isValid}>
                            Submit
                        </Button>
                    </Form>
                </aside>
            </div>
            
        </div>
    )
}