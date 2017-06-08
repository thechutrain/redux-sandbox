import { fromJS } from 'immutable'
import {
	ADD_ITEM_CART,
	CLEAR_CART,
	REMOVE_ITEM_CART
} from '../actions/shopActions'

const initState = {
	items: {},
	itemPricing: {},
	totalCost: null
}

const shopReducer = (state = initState, action) => {
	let newState // since I didn't want to chain a huge line & return it
	// let removeKey // flag to tell us to remove
	switch (action.type) {
		case CLEAR_CART:
			return fromJS(state).set('items', {}).toJS()
		case ADD_ITEM_CART:
			newState = fromJS(state).updateIn(['items', action.itemName], value => {
				return value === undefined ? 1 : value + action.quantity
			})
			return newState.toJS()
		case REMOVE_ITEM_CART:
			newState = fromJS(state)
			// check to see if that item is in the cart, if not just return state
			if (newState.getIn(['items', action.itemName]) === undefined) {
				console.warn('THAT ITEM DOES NOT EXIST')
				return newState.toJS()
			}
			// Assume item is in cart, subtract quantity
			const updatedState = newState.updateIn(
				['items', action.itemName],
				value => {
					return value - action.quantity
				}
			)
			// if 0 or negative, remove that key
			if (updatedState.getIn(['items', action.itemName]) > 0) {
				return updatedState.toJS()
			} else {
				return updatedState.deleteIn(['items', action.itemName]).toJS()
			}
		default:
			return state
	}
}

export default shopReducer
