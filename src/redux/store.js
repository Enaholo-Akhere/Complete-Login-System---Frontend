import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

const middleware = [thunk];

const composeWith = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const store = createStore(rootReducer, composeWith(applyMiddleware(...middleware)))

export default store;