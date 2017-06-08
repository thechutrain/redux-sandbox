import store from './store'
// import { updateName, addMoney, subMoney } from './actions/userActions'
import { addItemCart, clearCart } from './actions/shopActions'

// Event listener on any changes to the store
store.subscribe(() => {
	console.log('store changed', store.getState())
})

// WORKING ACTIONS!
// store.dispatch(updateName('alan chew'))
// store.dispatch(addMoney(5))
// store.dispatch(addMoney(3))
// store.dispatch(subMoney(25))
store.dispatch(addItemCart('oranges'))
store.dispatch(addItemCart('oranges'))
store.dispatch(clearCart())
