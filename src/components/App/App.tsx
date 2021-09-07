import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home, Movie, Actors,Login} from '../pages'
import {HeadPanel} from '../common'

export const PATH = {
    HOME: "/",
    MOVIE: "/movie",
    ACTORS: "/actors",
    LOGIN: "/login",
}

function App() {

    return (
        <BrowserRouter>
            <div>
                <HeadPanel/>

                <main>
                    <Switch>
                        <Route exact path={PATH.HOME} render={() => <Home/>}/>
                        <Route exact path={PATH.MOVIE} render={() => <Movie/>}/>
                        <Route exact path={PATH.ACTORS} render={() => <Actors/>}/>
                        <Route exact path={PATH.LOGIN} render={() => <Login/>}/>
                        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
