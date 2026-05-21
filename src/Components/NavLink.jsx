import { Link } from "react-router-dom";

export default function NavLink({ to, label }) {
    return (
        <Link className="btn btn-outline-secondary" to={to}>
        {label}
        </Link>
    )
}