import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Page404 from './404/404'
import PageIndex from './index'

import { INDEX } from 'config/routes'

const ScreensRoot = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={INDEX} component={PageIndex} />
            <Route component={Page404} />

            {/*
                Uncomment to permanent redirect from all unknown pages
                to INDEX instead of showing 404 error
            */}
            {/*<Redirect to={INDEX} />*/}
        </Switch>
    </BrowserRouter>
);

export default ScreensRoot