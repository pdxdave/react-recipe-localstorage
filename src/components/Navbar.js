import {Link} from 'react-router-dom'
import style from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.nav_container}>
            <div className={style.nav_flex}>
                <div className={style.logo}>
                    <Link to="/" >
                        Logo
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/search_list">Search Recipes</Link>
                        </li>
                        <li>
                            <Link to="/recipes_to_try">Recipes To Try</Link>
                        </li>
                        <li>
                            <Link to="/finished_recipes">Finished Recipes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar