import C from './constants'
import { allSkiDays } from './store/reducers'

//start by creating an array
const state = [
    {
        "resort": "Snow Trails",
        "date": "2005-01-01",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "Bunny Hop",
        "date": "2010-12-31",
        "powder": true,
        "backcountry": false
    }
]

//add another object to the array:
//coded out only because we're also trying REMOVE_DAY below

//const action = {
//	type: C.ADD_DAY,
//    payload: {
//        "resort": "Breckenridge",
//        "date": "2005-01-01",
//        "powder": false,
//        "backcountry": false
//    }
//}

//remove an object:
const action = {
    type: C.REMOVE_DAY,
    payload: "2010-12-31" //removes Bunny Hop
}

//take the original object/array/state and do the action on it
//which is add to the array
const nextState = allSkiDays(state, action)

console.log(`

    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`)

