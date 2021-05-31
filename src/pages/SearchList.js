import style from '../styles/searchlist.module.css'
import {useState} from 'react'

const SearchList = () => {
    const [query, setQuery] = useState("steak")
    return (
        <div>
            <form>
            <input type="text" placeholder="Enter main ingredient..."/>
            <button type="submit">Search</button>
            </form>

        </div>
    )
}
export default SearchList