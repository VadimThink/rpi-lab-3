import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Poets from './Poets';
import PoetPage from './PoetPage';

function App() {
    return (
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
    );
}

export default App;
