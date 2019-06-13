//we are re-writing index for this lesson on combined reducers.
import C from './constants'
import appReducer from './store/reducers' //that's not a function we wrote.
    //i assume it's part of "combineReducers" from Redux import in the reducers.js file.
import initialState from './initialState.json'

let state = initialState

//this will print the initialState
console.log(`

    Initial State
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`)

//the parameters below are really state and action,
//just broken down into action's type and payload.
state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2
})

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt. Fuji",
        "date": "2019-01-15",
        "powder": false,
        "backcountry": false
    }
})

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ["Alps", "Himalayas", "Brandywine"]
})

//this will print after the three appReducers run:
console.log(`

    Next State
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`)