import { createStore,applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// import cakeReducer from './cakes/cakeReducer'
import logger from 'redux-thunk'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk)))

export default store