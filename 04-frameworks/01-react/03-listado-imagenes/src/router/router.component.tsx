import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CatsListScene, DogsListScene, CheckOutScene } from 'scenes';

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact={true}
                    path={[switchRoutes.root, switchRoutes.cats]}
                    component={CatsListScene} />
                <Route
                    exact={true}
                    path={switchRoutes.dogs}
                    component={DogsListScene} />
                <Route
                    exact={true}
                    path={switchRoutes.checkout}
                    component={CheckOutScene} />
            </Switch>
        </Router>
    )
};