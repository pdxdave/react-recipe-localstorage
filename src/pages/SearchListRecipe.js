import style from '../styles/searchlistrecipe.module.css'
import no_image from '../images/no_image_available.svg'

const SearchListRecipe = ({food}) => {
    
    return (
        <div className={style.card_container}>
            <div className={style.recipe_card}>
                <div className={style.recipe_card_image}>
                    {!food.recipe.image 
                        ? <img src={no_image} alt="no image" /> 
                        : <img src={food.recipe.image} alt={food.recipe.label} />}

                    <p className={style.card_label}>
                        {food.recipe.label.length > 20 ? food.recipe.label.substring(0, 23) + '...' : food.recipe.label}   
                    </p> 
                </div>
                <button className={style.recipe_card_btn}>Recipe Details</button>
            </div>
        </div>
    )
}
export default SearchListRecipe