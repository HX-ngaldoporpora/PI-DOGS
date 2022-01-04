import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Detail from './Components/Detail';
import CreateDog from './Components/CreateDog';
import About from './Components/About'
import Favorites from './Components/Favorites';

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
