import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(epicMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : function(f){return f;}
    )
);

export default store;