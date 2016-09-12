import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import articleReducer from './reducers/article';
import trendReducer from './reducers/trend';

export default combineReducers({
    trend: trendReducer,
    article: articleReducer,
    routing: routerReducer
})