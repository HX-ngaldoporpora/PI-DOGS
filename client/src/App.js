import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import Home from './Components/Pages/Home';
import Detail from './Components/Pages/Detail';
import CreateDog from './Components/Pages/CreateDog';
import About from './Components/Pages/About'
import Favorites from './Components/Pages/Favorites';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <Switch>
       <Route exact path = "/" component = {LandingPage}/>
       <Route exact path = '/dogs' component = {Home}/>
       <Route path = '/dogs/create' component={CreateDog}/>
       <Route path = '/dogs/:id' component={Detail}/>
       <Route path = '/about' component = {About}/>
       <Route path = '/favorites' component ={Favorites}/>
       </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
