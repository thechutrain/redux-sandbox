import { fromJS } from 'immutable'

const initState = {
	items: [],
	totalCost: null
}
const shopReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			const newState = fromJS(state).toJS()
			newState.items.push(action.payload)
			return newState
		default:
			return state
	}
}

export default shopReducer
