import C from '../constants'

export const goal = (state=10, action) => 
	(action.type === C.SET_GOAL) ? 
		 parseInt(action.payload) :
		 state


export const skiDay = (state=null, action) => 
  (action.type === C.ADD_DAY) ?
  	action.payload :
        state

//new function to add errors:
export const errors = (state = [], action) => {

    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ]
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i != action.payload)
        default:
            return state
    }
}
//under ADD_ERROR: see the ...state -- action.payload?
//that syntax creates a new array by taking the old one and adding the payload
//if we used state.push(action.payload), it would work BUT
//it would be changing the initial state instead of producing an output state.
//so don't do that.

//CLEAR_ERROR: .filter is a built-in function.
//it expects certain parameters
//basically it's a t/f. if t, the item gets filtered out of the array.
//if f, it remains.