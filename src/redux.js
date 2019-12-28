import { createStore, combineReducers } from 'redux'
import { getOtherTeam, TEAM_COLORS } from './Teams'

const SET_CARDS = "SET_CARDS"
const CHANGE_TEAM = "CHANGE_TEAM"
const CREATE_TEAMS = "CREATE_TEAMS"

const INIT_STATE = { cards: [], teams: [], currentTeam: '', currentTeamColor: '', teamColors: {} }

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    payload: cards,
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
    payload: teams,
  }
}

export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    case CHANGE_TEAM:
      const newTeam = getOtherTeam(state.teams, state.currentTeam)
      console.log("setting currentTeam in reducer: ", newTeam, 'color ', state.teamColors[newTeam], 'teamColors', state.teamColors)
      return {
        ...state,
        currentTeam: newTeam,
        currentTeamColor: state.teamColors[newTeam],
      }
    case CREATE_TEAMS:
      const [t1, t2] = action.payload
      const [c1, c2] = TEAM_COLORS
      return {
        ...state,
        teams: action.payload,
        currentTeam: t1,
        currentTeamColor: c1,
        teamColors: { [t1]: c1, [t2]: c2},
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store