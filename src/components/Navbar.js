import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to="/">
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
    )
}
export default Navbar