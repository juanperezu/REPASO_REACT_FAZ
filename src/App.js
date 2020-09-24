import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Acerca from './components/Acerca';
import Login from './components/Login';
import Form from './components/Form';
import Otro from './components/Otro';
 // importar todos los componente que van a navegar 

 function App() {
  return (
    <Router>
    <div className="container p-3 my-3">
    <div className="btn-group">
     <ul>
     <li><Link to="/"  className="btn btn-primary">Inicio</Link> </li> 
     <li><Link to="/about"  className="btn btn-primary">Acerca</Link></li> 
     <li><Link to="/login"  className="btn btn-primary">Ingreso</Link></li> 
     <li><Link to="/form"  className="btn btn-primary">Inscribirse</Link></li> 
     <li><Link to="/ayuda"  className="btn btn-primary">Ayuda</Link></li> 
     </ul>
     
    </div>
   <center> <img src={logo} /></center>
    <hr/>
    {
      // **** colocar códig
    }
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/about">
    <Acerca/>
    </Route>
    <Route exact path="/form">
    <Form/>
    </Route>


    <Route exact path="/login">
    <Login/>
    </Route>

    <Route exact path="/ayuda">
    <Otro/>
    </Route>


    </Switch>
   


    </div>
    </Router>
  );
}

function Home(){
return(
<div className="card card-body">
<h2>Home</h2>
</div>
 )
}
export default App;
