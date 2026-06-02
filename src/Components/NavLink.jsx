import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

import Badge from 'react-bootstrap/Badge'
import { getCartTotalQuantity } from '../assets/cart'

export default function NavLink({ to, label }) {
    const [qty, setQty] = useState(getCartTotalQuantity())

    useEffect(() => {
        const update = () => setQty(getCartTotalQuantity())

        window.addEventListener("cartUpdated", update)

        return () => window.removeEventListener("cartUpdated", update)
    }, [])

    if (label=="Cart") {
        return (
            <Link className="btn btn-outline-secondary" to={to}>
                {label} 
                <Badge bg="danger" className="ms-2">{getCartTotalQuantity()}</Badge>
            </Link>
        )
    }
    else {
        return (
            <Link className="btn btn-outline-secondary" to={to}>
                {label}
            </Link>
        )
    }
    
}