import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Poets from './Poets';
import PoetPage from './PoetPage';
import { Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';

function App() {
    return (
        <Suspense fallback={<CircularProgress size={80} style={{ margin: 'auto' }} />}>
            <Router>
                <Switch>
                    <Route path="/poets" exact>
                        <Poets />
                    </Route>
                    <Route path="/poets/:id">
                        <PoetPage />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
