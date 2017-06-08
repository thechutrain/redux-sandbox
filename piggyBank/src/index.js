import store from './store'
import { updateName, addMoney, subMoney } from './actions/userActions'

// Event listener on any changes to the store
store.subscribe(() => {
	console.log('store changed', store.getState())
})

// store.dispatch(dispatch => {
// 	dispatch({ type: 'FETCH_DATA' })
// 	axios
// 		.get('/api/questions')
// 		.then(response => {
// 			// console.log(response.data)
// 			dispatch({ type: 'RECEIVE_DATA', payload: response.data })
// 		})
// 		.catch(err => {
// 			dispatch({ type: 'FETCH_ERROR', payload: err })
// 		})
// })

// store.dispatch({ type: 'ADD_ITEM', payload: 'apple' })

// WORKING ACTIONS!
// store.dispatch({ type: UPDATE_NAME, payload: 'alan' })
store.dispatch(updateName('alan chew'))
store.dispatch(addMoney(5))
store.dispatch(addMoney(3))
store.dispatch(subMoney(100))
