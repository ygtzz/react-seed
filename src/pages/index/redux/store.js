import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : function(f){return f;}
    )
);

sagaMiddleware.run(sagas);


export default store;