import { applyMiddleware,createStore } from 'redux'
import { mobileReducer } from './redux/reducers/mobile'
import createSagaMiddleware from 'redux-saga'
import { watchUser } from './redux/saga/user.saga'

const sagaMiddleware = createSagaMiddleware() 

export const store = createStore(mobileReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchUser)