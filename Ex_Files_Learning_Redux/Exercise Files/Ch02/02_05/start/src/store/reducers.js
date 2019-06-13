import C from '../constants'

export const goal = (state=10, action) => 
	(action.type === C.SET_GOAL) ? 
		 parseInt(action.payload) :
		 state


export const skiDay = (state=null, action) => 
  (action.type === C.ADD_DAY) ?
  	action.payload :
  	state

export const errors = (state=[], action) => {

  switch(action.type) {

    case C.ADD_ERROR :

    	return [
         ...state,
         action.payload
    	]

    case C.CLEAR_ERROR : 

      return state.filter((message, i) => i !== action.payload)

  	default: 
  		return state

  }
}

//new in this lesson:
export const allSkiDays = (state = [], action) => {

    switch (action.type) {

        case C.ADD_DAY:

            //let's prevent two ski days from being assigned to the same calendar day.
            //.some checks the array to see if a value already exists there.
            //if it's true, return orig state. if false, return the new state.
            const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date)
                return (hasDayAlready) ?
                state:
                [
                    ...state,
                    skiDay(null, action) //see how you used another reducer in this reducer?
                ]

        case C.REMOVE_DAY:
            return state.filter(skiDay => skiDay.date != action.payload)

        default:
            return state

    }
}