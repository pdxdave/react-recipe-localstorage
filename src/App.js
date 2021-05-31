import './App.css';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchList from './pages/SearchList'
import FinishedRecipes from './pages/FinishedRecipes'
import RecipesToTry from './pages/RecipesToTry'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search_list" component={SearchList}/>
        <Route path="/recipes_to_try" component={RecipesToTry}/>
        <Route path="/finished_recipes" component={FinishedRecipes}/>
      </Switch>
    </div>
  );
}

export default App;
