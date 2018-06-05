import { createStore, applyMiddleware } from 'redux'
import storageMiddleware from '../lib/storageMiddleware'
import saveToStorage from '../config/saveToStorage'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(storageMiddleware(saveToStorage)))
)
export const dispatch = store.dispatch
export const getState = store.getState

export default store
