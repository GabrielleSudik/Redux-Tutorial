//created in this lesson.
//import the verbs and the states from the previous lesson:
import C from './constants'
import { allSkiDays, goal } from './initialState.json'

console.log(`

    Ski Day Counter
    ===============
    The goal is ${goal} days.
    Initially there are ${allSkiDays.length} ski days in the state.

    Constants (actions/verbs)
    -------------------------
    ${Object.keys(C).join('\n    ')}

`)

//the goal and allSkiDays.length come from initialState.json (states)
//keys(C) comes from constants.js (list of actions)