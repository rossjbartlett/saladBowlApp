import { createStore, combineReducers } from 'redux'
import { getOtherTeam, TEAM_COLORS } from './Teams'

const SET_CARDS = "SET_CARDS"
const INCREMENT_SCORE = "INCREMENT_SCORE"
const CHANGE_TEAM = "CHANGE_TEAM"
const CREATE_GAME = "CREATE_GAME"

const INIT_STATE = {
  cards: [],
  teams: [],
  currentTeam: '',
  currentTeamColor: '',
  teamColors: {},
  score: {},
}

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    payload: cards,
  }
}

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE,
  }
}

// TOO make CLEAR_SCORE for resetting the game

export const changeTeam = () => {
  return {
    type: CHANGE_TEAM,
  }
}

export const createGame = (teams) => {
  return {
    type: CREATE_GAME,
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
    case INCREMENT_SCORE:
      const newScore = state.score
      newScore[state.currentTeam] = state.score[state.currentTeam] + 1
      console.log("score:", newScore)
      return {
        ...state,
        score: newScore
      }
    case CHANGE_TEAM:
      const newTeam = getOtherTeam(state.teams, state.currentTeam)
      console.log("setting currentTeam in reducer: ", newTeam, 'color ', state.teamColors[newTeam], 'teamColors', state.teamColors)
      return {
        ...state,
        currentTeam: newTeam,
        currentTeamColor: state.teamColors[newTeam],
      }
    case CREATE_GAME:
      const [t1, t2] = action.payload
      const [c1, c2] = TEAM_COLORS
      return {
        ...state,
        teams: action.payload,
        currentTeam: t1,
        currentTeamColor: c1,
        teamColors: { [t1]: c1, [t2]: c2 },
        score: { [t1]: 0, [t2]: 0 },
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store