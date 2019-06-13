import C from './constants'
import { skiDay } from './store/reducers'

//intead of declaring something, just null
const state = null

//action type matches the object
//payload maps to objects in the initialState
const action = {
	type: C.ADD_DAY,
    payload: {
        "resort": "Heaven",
        "date": "2016-01-01",
        "powder": false,
        "backcountry": false
    }
}

const nextState = skiDay(state, action)
//skiDay is defined in reducers.js

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`)