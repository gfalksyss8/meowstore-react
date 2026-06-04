// Local components
import CatBanner from '../Components/CatBanner.jsx'

// React modules
import { Link } from 'react-router-dom'

export default function StartPage() {
    return (
        <div className="container py-4 my-2 border text-center">
            <h4 className="text-body">Meow Store</h4>

            <br></br>
            <div className="row">
                <CatBanner/>
            </div>

            <div className="row">
                <section className="col py-2 my-4">
                    <p>At Meow Store, we have the widest selection of cat breeds. All of our cats are bred with love, and we ensure the safety of all of our cats.<br/><br/>
                        Meow Store has a no-left-behind policy, and we collaborate with local animal rescue laws to ensure all of our cats are cared for lovingly and safely. All available cats are vaccinated and disease-free.<br/><br/>
                        Browse our Catalog to see all breeds currently available for purchase, or check out the featured Cat of the Day!
                    </p>
                </section>
            </div>

            <div className="row">
                <aside className="col py-2 my-4">
                    <p>View the Catalog</p><br></br>
                    <Link className="btn btn-primary" to="/catalog">
                        Catalog
                    </Link>
                </aside>

                <aside className="col py-2 my-4">
                    <p>See our Cat of the Day</p><br></br>
                    <Link className="btn btn-primary" to="/catoftheday">
                        Cat of the Day
                    </Link>
                </aside>
            </div>

        </div>
    )
}