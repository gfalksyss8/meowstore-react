export default function About() {
    return (
        <div className="container py-4 my-2 border text-center">
            <h4 className="text-body">About Us</h4>

            <div className="row">
                <aside className="col py-2 my-4 ">
                    <h2 className="text-body">Licensed Vendor <i className="bi bi-check"></i> </h2>
                    <p>Meow Store has been approved by and is licensed in the sale of cat breeds and kittens. All cats are vaccinated and disease-free. </p>
                </aside>

                <aside className="col py-2 my-4 ">
                    <h2 className="text-body">Contact Us <i className="bi bi-person-lines-fill"></i> </h2>
                    <p><small>Address: </small> Cat Avenue 152</p>
                    <p><small>Phone: </small> 070 111 11 11</p>
                    <p><small>Email: </small> meow@store.com</p>
                </aside>
            </div>

            <div className="row">
                <section className="col py-2 my-4 ">
                    <h2 className="text-body">Open-House <i className="bi bi-house"></i> </h2>
                    <p>Meow Store offers a physical open-house visits, where you can visit and spend time with our selection of available cats.</p>
                    <p>Visit us at our address, as seen above.</p>
                    <br></br><b>Times:</b>
                    <p>Monday - Friday: <i>11:00 - 17:00</i></p>
                    <p>Saturday: <i>9:00 - 15:00</i></p>
                    <p>Sunday: <b>Closed</b></p>
                </section>
            </div>
        </div>
    )
}