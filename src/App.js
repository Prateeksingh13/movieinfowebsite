import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home  from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbars from './Navbars';
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Footers from './Footers';
import Movieinfo from './Pages/Movieinfo'
const App =() =>{
  return( 
    <>
    <Navbars/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/page1" component={Page1}/>
      <Route exact path="/page2" component={Page2}/>
      <Route exact path="/page3" component={Page3}/>
      <Route exact path="/page4" component={Page4}/>
      <Route exact path="/movieinfo" component={Movieinfo}/>
      <Redirect to='/' />
    </Switch>
    <Footers/>
    </>
  );
}

export default App;
