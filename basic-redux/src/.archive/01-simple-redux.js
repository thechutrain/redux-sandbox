import { createStore } from 'redux'

// Create a reducer that changes the state based on action.type
const defaultState = 0
const reducer = function(state = defaultState, action) {
	switch (action.type) {
		case 'INC':
			return state + 1
		case 'DEC':
			return state - 1
		default:
			return state
	}
}

const store = createStore(reducer)

// Event listener on any changes to the store
store.subscribe(() => {
	console.log('store changed', store.getState())
})

store.dispatch({ type: 'INC' })
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'DEC' })
