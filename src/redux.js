import { createStore, combineReducers } from 'redux'
import { getOtherTeam } from './Teams'

const SET_CARDS = "SET_CARDS"
const CHANGE_TEAM = "CHANGE_TEAM"

const INIT_STATE = { cards: [], currentTeam: "BLUE" }

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    payload: cards
  }
}

export const changeTeam = (team) => {
  return {
    type: CHANGE_TEAM,
  }
}

export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    case CHANGE_TEAM:
      return {
        ...state,
        currentTeam: getOtherTeam(state.currentTeam)
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store