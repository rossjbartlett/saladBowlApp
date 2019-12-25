import { createStore, combineReducers } from 'redux'
import { getOtherTeam } from './Teams'

const SET_CARDS = "SET_CARDS"
const CHANGE_TEAM = "CHANGE_TEAM"
const CREATE_TEAMS = "CREATE_TEAMS"

const INIT_STATE = { cards: [], teams: []}

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    payload: cards
  }
}

export const changeTeam = () => {
  return {
    type: CHANGE_TEAM,
  }
}

export const createTeams = (teams) => {
  return {
    type: CREATE_TEAMS,
    payload: teams
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
      const other = getOtherTeam()
      console.log("setting current to other, in reducer: ", other)
      return {
        ...state,
        currentTeam: other
      }
    case CREATE_TEAMS:
      return {
        ...state,
        teams: action.payload,
        currentTeam: action.payload[0]
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store