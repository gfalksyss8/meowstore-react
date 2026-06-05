// React modules
import { Link } from 'react-router-dom'

// Bootstrap modules
import Badge from 'react-bootstrap/Badge'

// Context API
import { useCart } from '../context/CartContext'

export default function NavLink({ to, label }) {
    const { totalQuantity } = useCart();

    if (label=="Cart") {
        return (
            <Link className="btn btn-outline-secondary" to={to}>
                {label} 
                <Badge bg="danger" className="ms-2">{totalQuantity}</Badge>
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