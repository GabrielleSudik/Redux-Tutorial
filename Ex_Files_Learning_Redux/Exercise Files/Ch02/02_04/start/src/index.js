import C from './constants'
import { errors } from './store/reducers'

const state = [
    "unauthorized",
    "server feed not found",
    "I just can't run a program for some as ugly as you."
]

//we'll start with 3 errors and we want to add one with ADD_ERROR
const action = {
    //first part of lesson added ADD_ERROR:
	//type: C.ADD_ERROR,
	//payload: "cannot connect to server"
    //second part added CLEAR_ERROR:
    type: C.CLEAR_ERROR,
    payload: 0
    //instead of the string, 0 identifies the place in the array
}

const nextState = errors(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`)