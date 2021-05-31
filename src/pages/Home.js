import style from '../styles/home.module.css'

const Home = () => {
    return (
        <div className={style.banner}>
            <div className={style.overlay}>
                {/* <div className={style.title}>
                    <h1>Search from</h1>
                    <h1>Thousands of </h1>
                    <h1>Recipes for your</h1>
                    <h1>Next Great Meal</h1>
                </div> */}
                <div className={style.flexi}>
                    <div className={style.test}>
                        <h1>Search from <span>Thousands of Recipes</span> for your <span>Next Great Meal</span></h1>
                    </div>
                    <div className={style.empty}>
                        {/* <h1>asdf</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home