import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Views/Home';
import Project from '../Views/Project';



let Content = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route path='/project'>
                    <Project/>
                </Route>

                
            </Switch>
        </div>
    )
}
export default Content;