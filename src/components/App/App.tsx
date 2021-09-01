import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Nav from "../Nav/Nav";
import Movie from "../pages/Movie/Movie";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


export const PATH = {
    HOME: "/",
    MOVIE: "/movie",
    LOGIN: "/login",
}

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1 className='logo'>HOME<span className=''>cinema</span></h1>
                <Nav/>


                <Switch>
                    <Route path={PATH.HOME} render={() => <Home/>}/>
                    <Route exact path={PATH.MOVIE} render={() => <Movie/>}/>
                    <Route exact path={PATH.LOGIN} render={() => <Login/>}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
