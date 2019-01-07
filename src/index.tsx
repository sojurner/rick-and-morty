import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { fetchData } from './middleware/sagas';
import App from './components/App';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
let middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

// process.env.NODE_ENV !== 'production'
//   ? (middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))
//   : (middleware = applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(fetchData);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
