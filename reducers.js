import { combineReducers } from 'redux'

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export function spellReducer(state = {name: '', description: ''}, action) {
  switch (action.type) {
    case 'GET_SPELL':
      return {
        ...state,
        spellLoading: true,
      }
    case 'SPELL_RECEIVED':
      return {
        ...state,
        name: action.json.name,
        description: action.json.desc,
        spellLoading: false,
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  spell: spellReducer
})
