import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import Commons from '../redux/reducers';
import CommonsSagas from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();
function* rootSagas() {
    yield all([
        CommonsSagas(),
    ]);
}

const store = configureStore({
    reducer: {
        Commons,
        Outro: Commons
    },
    middleware: [...getDefaultMiddleware({thunk:false}), sagaMiddleware]
});
sagaMiddleware.run(rootSagas);

export default props => (
    <Provider store={store}>
        {props.children}
    </Provider>
);