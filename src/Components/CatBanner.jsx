// React modules
import { useEffect, useState } from 'react'

// Cat API setup
const url = 'https://api.thecatapi.com/v1/images/search'

export default function CatBanner() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    // API Fetch
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data?.[0]?.url) {
                    setImage(data[0].url)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div
            className="catBanner"
            style={{
                height: "200px",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: image ? `url(${image})` : "none",
            }}
        >
            {loading && (
                <div className="spinner-border text-light m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )
}