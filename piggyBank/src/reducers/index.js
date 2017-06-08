import { combineReducers } from 'redux'
// import testReducer from './testReducer'
import shopReducer from './shopReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
	shopReducer,
	userReducer
})

export default reducers
