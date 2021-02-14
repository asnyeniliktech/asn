import { Switch,Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
global.jQuery = require('jquery');
require('bootstrap')
const App =()=> {
  return (
    <div >
      <Navbar/> 
   <Switch>

    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/services" component={Services}/>
    <Route exact path="/contact" component={Contact}/>
     <Redirect to="/"/>
 

   </Switch>

   <Footer/>

 

    </div>
  );
}

export default App;
