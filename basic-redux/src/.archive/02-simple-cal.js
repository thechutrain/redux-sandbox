import { createStore } from 'redux'

// Create a reducer that changes the state based on action.type
const defaultState = 0
const reducer = function(state = defaultState, action) {
	switch (action.type) {
		case 'ADD':
			console.log('adding reducer ...')
			return state + action.num
		case 'SUB':
			console.log('subtracting reducer ...')
			return state - action.num
		case 'MUL':
			return state * action.num
		case 'DIV':
			return state / action.num
		default:
			return state
	}
}

const store = createStore(reducer)

// Event listener on any changes to the store
store.subscribe(() => {
	console.log('store changed', store.getState())
})

store.dispatch({ type: 'ADD', num: 4 })
store.dispatch({ type: 'SUB', num: 2 })
store.dispatch({ type: 'MUL', num: 3 })
store.dispatch({ type: 'DIV', num: 5 })
