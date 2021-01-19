import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Auth0Provider} from '@auth0/auth0-react';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Auth0Provider
                domain="capslocktechnologies-login.us.auth0.com"
                clientId="ukL5kegeNJro7pGm6qhGiIfgX0oQTxo3"
                redirectUri={window.location.origin}
                audience="https://capslocktechnologies-login.us.auth0.com/api/v2/"
                scope="read:current_user update:current_user_metadata"
                >
                <App />
            </Auth0Provider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
