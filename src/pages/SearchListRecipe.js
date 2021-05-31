import style from '../styles/searchlistrecipe.module.css'

const SearchListRecipe = ({food}) => {
    
    return (
        <div>
            <div className={style.recipe_card}>
                <div className={style.recipe_card_image}>
                    <img src={food.recipe.image} alt={food.recipe.label} />
                    <p className={style.card_label}>
                     {food.recipe.label.length > 20 ? food.recipe.label.substring(0, 25) + '...' : food.recipe.label}   
                    </p> 
                </div>
                <button>Recipe Details</button>
            </div>
        </div>
    )
}
export default SearchListRecipe