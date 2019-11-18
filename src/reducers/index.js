import { combineReducers } from 'redux'
import quoteReducer from './quote-reducer'
import quoteListReducer from './quote-list-reducer'

export default combineReducers({
    quoteListReducer,
    quoteReducer,
})