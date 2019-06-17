import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'

//const store = createStore(appReducer)
//now the store will hold and manage your state.
//the state comes from the appReducer

//or to also initialize the store with the initial state (you don't have to include that):
const store = createStore(appReducer, initialState)

console.log('initial state', store.getState())
//the store uses the appReducer to calculate the initial state.
//once all reducers are invoked, the defaults will be saved as the initial state.

//the store also dispatches:
//it says what action is happening
//and updates the relevant part of the state
store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "A",
        "date": "2016-01-01",
        "powder": false,
        "backcountry": true
    }
})

//we'll see that new day added.
console.log('next state', store.getState())

//getState = looks at current state, however it is right then.
//dispatch = mutates the state.