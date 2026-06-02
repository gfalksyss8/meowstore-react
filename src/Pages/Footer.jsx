import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container py-4 bg-body-tertiary text-center">
            <footer className="container-fluid mb-1">
                <button className="btn btn-sm">
                    <i className="bi bi-twitter-x ms-2"></i>
                </button>
                <button className="btn btn-sm">
                    <i className="bi bi-facebook ms-2"></i>
                </button>
                <button className="btn btn-sm">
                    <i className="bi bi-instagram ms-2"></i>
                </button>
            </footer>
            <footer className="container-fluid p-2 border-top">
                <Link className="navbar-brand" to="/">Home </Link>
                |
                <Link className="navbar-brand" to="/about"> About Us</Link>
            </footer>
        </div>
    )
}