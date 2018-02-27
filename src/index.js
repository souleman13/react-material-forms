import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Theme} from './configuration/theme'

const AppWrapper = (
    <MuiThemeProvider muiTheme={Theme}>
        <App />
    </MuiThemeProvider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'));
registerServiceWorker();
