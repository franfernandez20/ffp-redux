import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../redux/reducers/AsyncExamples/reducers'
import { composeWithDevTools } from "redux-devtools-extension";

import todoApp from '../redux/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    // rootReducer,
    todoApp, // Este es root reducers TBD FFP
    preloadedState,
    compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware),
        composeWithDevTools() // En produccion no deberia estar
    )
    
  )
}