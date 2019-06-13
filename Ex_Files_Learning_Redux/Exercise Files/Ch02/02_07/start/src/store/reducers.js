import C from '../constants'
//new:
import { combinedReducers, combineReducers } from 'redux'

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

export const fetching = (state=false, action) => {

  switch(action.type) {

    case C.FETCH_RESORT_NAMES :
      return true

    case C.CANCEL_FETCHING :
      return false 

    case C.CHANGE_SUGGESTIONS :
      return false   

    default:
      return state
  }

}

export const suggestions = (state=[], action) => {

  switch(action.type) {

    case C.CLEAR_SUGGESTIONS :
      return []

    case C.CHANGE_SUGGESTIONS :
      return action.payload  

    default :
      return state
  }

}

//new variable needed for resortNames because that part of the state has children:
//commented out because it will be done as one below.

//const resortNames = combineReducers({
//    fetching,
//    suggestions
//})

//new combined reducer:
//commented out because it will be done as one below.

//const singleReducer = combineReducers({
//    allSkiDays,
//    goal,
//    errors,
//    resortNames //remember: resortNames from this page
//        //was created to have children; they are implicitly here too.
//})

//you can do it this way in place of mulitple separates above:
export default combineReducers({
    allSkiDays,
    goal,
    errors,
    resortNames: combineReducers({
        fetching,
        suggestions
    })
})
//each of these is a function already defined above, and also mimics shape of the object.