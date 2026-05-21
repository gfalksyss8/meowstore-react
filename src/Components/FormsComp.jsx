import { useEffect } from 'react'

export default function FormsComp({catInfoChange}) {

    function handleChange(event) {
        const {name, value} = event.target;
    
        catInfoChange(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    return (
        <form className="form">
            <label htmlFor="name">Input</label>
            <input className="input" type="text" id="name" name="name"></input>
        </form>
    )
}