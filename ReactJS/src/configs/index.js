import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducers from '../reducers';

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(rootReducers, middlewares);

export default store;
