import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import LessonOttizUch from "./LessonOttizUch";
import LeesonOttizIkkiy from "./LeesonOttizIkkiy";
import LifeSiclMetods from "./LifeSiclMetods";
import NavBar from "./NavBar";
import posts from "./posts"
import PostView from "./PostView";
class Routing extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>

                    <NavBar/>

                    <Switch>
                        <Route exact path = '/' component = {LeesonOttizIkkiy}/>
                        <Route exact path='/products' component={LessonOttizUch}/>
                        <Route exact path='/cycle' component={LifeSiclMetods}/>
                        <Route exact path='/posts' component={posts}/>
                        <Route exact path='/posts/:id' component={PostView}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routing;