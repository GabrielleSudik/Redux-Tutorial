import C from '../constants'

//the basic function:
//function goal(state, action) {
//    if (action.type === C.SET_GOAL) {
//        return action.payload
//    }
//    else {
//        return state
//    }
//}

//written in ES6 syntax (better):
//an arrow function
export const goal = (state=10, action) => {
    if (action.type === C.SET_GOAL) {
        return parseInt(action.payload)
    }
    else {
        return state
    }
}

//state=10 is an optional parameter. so even if nothing is passed, the function will return 10.
//parseInt just makes sure the state is always an int.