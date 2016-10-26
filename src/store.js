import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import createLogger from 'redux-logger';

const rootReducer = () => ({ test: 'test' });
const logger = createLogger({
  collapsed: true,
  logger: console,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

store.runSaga = sagaMiddleware.run;

export default store;
