import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomePage from '../View/index';
import ScssGridExample from '../View/ScssGridExample';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route exact path="/grid-demo" component={ScssGridExample}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;