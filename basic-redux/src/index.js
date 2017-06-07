import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' // lets us pass in function to dispatch, instead of action obj ... more flexibility!
import axios from 'axios'

// Create a reducer that changes the state based on action.type
const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}
const reducer = function(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			// return state + 1
			console.log('FETCHING users start ...')
			return { ...state, fetching: true }
		case 'RECEIVE_DATA':
			console.log('GOT the API data yoooo')
			// return Object.assign({}, state, action.payload)
			return { ...state, fetching: false, fetched: true, users: action.payload }
		case 'FETCH_ERROR':
			console.log('ERROR in fetching ...')
			return { ...state, error: action.payload }
			break
		default:
			return state
	}
	// return state
}

// CREATING MIDDLEWARE
const middleware = applyMiddleware(thunk, createLogger())

const store = createStore(reducer, middleware)

// Event listener on any changes to the store
store.subscribe(() => {
	console.log('store changed', store.getState())
})

store.dispatch(dispatch => {
	dispatch({ type: 'FETCH_DATA' })
	axios
		.get('/api')
		.then(response => {
			// console.log(response.data)
			dispatch({ type: 'RECEIVE_DATA', payload: response.data })
		})
		.catch(err => {
			dispatch({ type: 'FETCH_ERROR', payload: err })
		})
})
