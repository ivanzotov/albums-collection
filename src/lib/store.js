import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware()))

export const dispatch = store.dispatch
export const getState = store.getState

export default store
