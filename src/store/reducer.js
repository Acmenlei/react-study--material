import {
    DECREAMENT, INCREAMENT
} from './actionsCreator'

const initalState = {
    counter: 0
}

// reducer creator
export default function reducer(state = initalState, action) {
    switch (action.type) {
        case INCREAMENT:
            return { ...state, counter: state.counter + action.size };
        case DECREAMENT:
            return { ...state, counter: state.counter - action.size };
        default:
            return state;
    }
}