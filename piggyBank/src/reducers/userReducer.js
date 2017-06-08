import { UPDATE_NAME, ADD_MONEY, SUB_MONEY } from '../actions/userActions'

const initState = {
	username: '',
	totalMoney: 0,
	age: null
}

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_NAME:
			return Object.assign({}, state, { username: action.payload })
		case ADD_MONEY:
			return Object.assign({}, state, {
				totalMoney: state.totalMoney + action.payload
			})
		case SUB_MONEY:
			return Object.assign({}, state, {
				totalMoney: state.totalMoney - action.payload
			})
		default:
			return state
	}
}

export default userReducer
