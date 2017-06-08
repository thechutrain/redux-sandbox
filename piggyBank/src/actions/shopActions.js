// import axios from 'axios'
/*
* action types
*/
export const CLEAR_CART = 'CLEAR_CART'
export const ADD_ITEM_CART = 'ADD_ITEM_CART'
export const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART'

/*
* action creators
*/
export function clearCart() {
	return { type: CLEAR_CART }
}

export function addItemCart(itemName, quantity = 1) {
	return {
		type: ADD_ITEM_CART,
		itemName,
		quantity
	}
}

export function removeItemCart(itemName, quantity = 1) {
	return {
		type: REMOVE_ITEM_CART,
		itemName,
		quantity
	}
}
