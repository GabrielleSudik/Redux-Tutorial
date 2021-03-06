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

export const allSkiDays = (state=[], action) => {

  switch(action.type) {

    case C.ADD_DAY : 

      const hasDay = state.some(skiDay => skiDay.date === action.payload.date)

      return (hasDay) ?
         state :
         [
           ...state,
           skiDay(null, action)
         ].sort((a, b) => new Date(b.date) - new Date(a.date))

    case C.REMOVE_DAY :

      return state.filter(skiDay => skiDay.date !== action.payload)     

    default:
      return state
  }

}

export const fetching = (state = false, action) => {

    switch (action.type) {
        case C.FETCH_RESORT_NAMES:
            return true
        case C.CANCEL_FETCHING:
            return false
        case C.CHANGE_SUGGESTIONS:
            return false
            //this case is here because of the final challege: CHANGE_SUGGESTIONS
            //it checks both the "fetching" reducer and "suggestions" reducer
            //so you need to add a case for what happens to fetching
            //when you use action type CHANGE_SUGGESTIONS
        default:
            return state
    }
}

export const suggestions = (state = [], action) => {

    switch (action.type) {
        case C.CLEAR_SUGGESTIONS:
            return []
        case C.CHANGE_SUGGESTIONS:
            return action.payload
        default:
            return state
    }

}
