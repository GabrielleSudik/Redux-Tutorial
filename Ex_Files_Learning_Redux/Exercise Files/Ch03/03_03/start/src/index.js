import C from './constants'
import appReducer from './store/reducers'
//import initialState from './initialState.json'
import { createStore } from 'redux'

//added later in the lesson: do start with an initial state
//you wrote a ternary, in case there is nothing in localStorage to parse
const initialState = JSON.parse(localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}

const store = createStore(appReducer, initialState)

//console.log('initial state', store.getState())
//replace with a subscribe:
//instead of having to write code for each place you want to get the state
//subscribe just keep watching for changes.
store.subscribe(() => console.log(store.getState()))

//you can subscribe to multiple things:
//this one will save data every time an action is dispatched
//to the localStorage called 'redux-store'
store.subscribe(() => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
})
//type "localStorage" in the console window of the web app

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

//console.log('next state', store.getState())

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})

