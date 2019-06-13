import C from './constants'
//replace old import with this:
import { goal } from './store/reducers'
//store/reducers.js is something you created
//it's where all the functions that change a state are housed.
//"goal" is a reducer.
//it will accept the initial state (defined here as 10)
//and the action (here, of type "set goal" and payload/new state of 15)


//this code is a demo of what a reducer does
//in short, it takes a state (here, goal of 10)
//and tells it what action is happening to that state (here, "set goal")
//and via payload, sets the new state (here, goal is now 15)

const state = 12

const action = {
    type: C.SET_GOAL,
    payload: 15
}

const nextState = goal(state, action)

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}

`)

const state2 = 8

const action2 = {
    type: C.SET_GOAL,
    payload: 14
}

const nextState2 = goal(state2, action2)

console.log(`

    initial goal: ${state2}
    action: ${JSON.stringify(action2)}
    new goal: ${nextState2}

`)