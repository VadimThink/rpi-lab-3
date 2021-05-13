import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StylesProvider } from '@material-ui/core/styles';
import 'fontsource-roboto';
import './styles/index.css';
import './i18n';

ReactDOM.render(
    <StylesProvider injectFirst>
        <App />
    </StylesProvider>,
    document.getElementById('root')
);
