import React from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net/js/jquery.dataTables.min'
import 'font-awesome/css/font-awesome.css'
import 'font-awesome/less/font-awesome.less'
import 'font-awesome/fonts/fontawesome-webfont.svg'
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import login from './components/login/login'
import register from './components/login/register.jsx'
import Instituti from './components/modules/index'

function App() {
  return (
      <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={login}/>
                    <Route exact path="/register" component={register}/>
                    <Route exact path="/institution" component={Instituti}/>
                </Switch>
            </div>
      </BrowserRouter>
  );
}

export default App;
