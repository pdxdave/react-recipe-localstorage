import style from '../styles/searchlist.module.css'
import SearchListRecipe from './SearchListRecipe'
import {useState, useEffect} from 'react'

const SearchList = () => {
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])


    const fetchData = () => {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`)
        .then(res => res.json())
        .then((res) => {
            setData(res.hits)
        })
        .catch((errors) => {
            console.log(errors)
        })  
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }


    return (
        <div>
            <div className={style.searchbar_image}>
                <div className={style.form_container}>
                    <form onSubmit={handleSubmit} >
                        <input 
                            type="text" 
                            placeholder="Enter food..."
                            value={search}
                            onChange={searchHandler}
                        />
                        <button type="submit">Search</button>
                    </form>
                    </div>
                </div>
            <div className={style.card_container}>
                {data.map((food) => (
                    <SearchListRecipe food={food} key={food.recipe.calories}/>
                ))}  
            </div>
        </div>
    )
}
export default SearchList