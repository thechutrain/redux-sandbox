import { createStore, combineReducers } from 'redux'

// Create a reducer that changes the state based on action.type
const userReducer = function(state = {}, action) {
	// return state
	switch (action.type) {
		case 'CHANGE_NAME':
			return Object.assign(state, { name: action.payload })
		case 'CHANGE_AGE':
			return { ...state, age: action.payload }
		default:
			return state
	}
}
const tweetsReducer = function(state = {}, action) {
	return state
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})

const store = createStore(reducers, {
	user: {
		name: 'alan',
		age: 24
	},
	tweets: []
})

// Event listener on any changes to the store
store.subscribe(() => {
	console.log('store changed', store.getState())
})

store.dispatch({ type: 'CHANGE_NAME', payload: 'CHEWBACCA' })
store.dispatch({ type: 'CHANGE_AGE', payload: 77 })
// store.dispatch({ type: 'MUL', num: 3 })
// store.dispatch({ type: 'DIV', num: 5 })
