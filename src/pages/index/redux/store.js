import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createSagaMiddleware()),
        window.devToolsExtension ? window.devToolsExtension() : function(f){return f;}
    )
);

export default store;