import { fromJS } from 'immutable'
import { ADD_ITEM_CART, CLEAR_CART } from '../actions/shopActions'

const initState = {
	items: {},
	itemPricing: {},
	totalCost: null
}

const shopReducer = (state = initState, action) => {
	switch (action.type) {
		case CLEAR_CART:
			return fromJS(state).set('items', {}).toJS()
		// return fromJS(state).delete('items').toJS()
		case ADD_ITEM_CART:
			const newState = fromJS(state).updateIn(
				['items', action.payload],
				value => {
					return value === undefined ? 1 : value + 1
				}
			)
			return newState.toJS()
		default:
			return state
	}
}

export default shopReducer
