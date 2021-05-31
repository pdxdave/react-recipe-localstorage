

const SearchListRecipe = ({food}) => {
    
    return (
        <div>
            <img src={food.recipe.image} alt={food.recipe.label} />
            <p>{food.recipe.label}</p>
        </div>
    )
}
export default SearchListRecipe