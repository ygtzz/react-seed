import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 应用一些中间件
const storeEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(
    rootReducer,
    // compose(
    //     applyMiddleware(sagaMiddleware),
    //     window.devToolsExtension ? window.devToolsExtension() : function(f){return f;}
    // )
    composeEnhancers(storeEnhancer)
);

sagaMiddleware.run(sagas);


export default store;