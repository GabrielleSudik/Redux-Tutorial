import C from '../constants'

//this was the old way we wrote it.
//another option is ternary. see below.

//export const goal = (state=10, action) => {
//   if (action.type === C.SET_GOAL) {
//   	   return parseInt(action.payload)
//   } else {
//       return state
//   }
//}

//new in this lesson:
//also converted to ternary below
//export const skiDay = (state = null, action) => {
//    if (action.type === C.ADD_DAY) {
//        return action.payload
//    }
//    else {
//        return state
//    }
//}

//here is the goal function, made even shorter than before with ternary
export const goal = (state = 10, action) => 
    (action.type === C.SET_GOAL) ? 
        parseInt(action.payload) : state

 //skiDay function as ternary:
export const skiDay = (state = null, action) =>
    (action.type === C.ADD_DAY) ?
        action.payload : state