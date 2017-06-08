// import axios from 'axios'
/*
* action types
*/
export const CLEAR_CART = 'CLEAR_CART'
export const ADD_ITEM_CART = 'ADD_ITEM_CART'

/*
* action creators
*/
export function clearCart() {
	return { type: CLEAR_CART }
}
export function addItemCart(itemName) {
	return {
		type: ADD_ITEM_CART,
		payload: itemName
	}
}
