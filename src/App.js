import React, {Component} from 'react';
import {Router, Switch, Route,} from 'react-router-dom';
import Main from './components/Main';
import HomeButton from './components/HomeButtom';

class App extends Component{
render(){
    return(
      <Router>
            <div>
              <HomeButton/>
              <Switch>
              <Route path="/"  exact component={HomeButton}/>
              <Route path="/cards" component={Main}/>
              </Switch>
             
        </div>
      </Router>
      
    );
}
}

export default (App);
