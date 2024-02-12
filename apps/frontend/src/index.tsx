import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import App from "./components/app/app";
import HistoryRouter from './components/history-router/history-router';
import { store } from './store/store';
import browserHistory from './browser-history';
import ErrorMessage from './components/error-message/error-message';

import { authoriseUserAction } from './store/api-actions';

store.dispatch(authoriseUserAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </StrictMode>
);
