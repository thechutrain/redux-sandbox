/*
* action types
*/
export const UPDATE_NAME = 'UPDATE_NAME'
export const ADD_MONEY = 'ADD_MONEY'
export const SUB_MONEY = 'SUB_MONEY'

/*
* action creators
*/
export function updateName(name) {
	return {
		type: UPDATE_NAME,
		payload: name
	}
}

export function addMoney(amountMoney) {
	return {
		type: ADD_MONEY,
		payload: amountMoney
	}
}

export function subMoney(amountMoney) {
	return {
		type: SUB_MONEY,
		payload: amountMoney
	}
}
