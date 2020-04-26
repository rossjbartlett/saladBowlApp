/* eslint-disable no-case-declarations */
import { createStore } from 'redux'
import { TEAM_COLORS } from './constants'

const DEFAULT_ROUNDS = ['Taboo', 'Charades', 'One Word Association']

const INIT_STATE = {
  cards: [],
  teams: [],
  currentTeam: '',
  currentTeamColor: '',
  teamColors: {},
  score: {},
  rounds: DEFAULT_ROUNDS,
  currentRound: 0
}

const getOtherTeam = (teams, currentTeam) => {
  const other = teams[(teams.indexOf(currentTeam) + 1) % 2]
  return other
}

// Action Types
const SET_CARDS = 'SET_CARDS'
const INCREMENT_SCORE = 'INCREMENT_SCORE'
const INCREMENT_ROUND = 'INCREMENT_ROUND'
const CHANGE_TEAM = 'CHANGE_TEAM'
const CREATE_GAME = 'CREATE_GAME'
const RESET = 'RESET'

// Actions
export const reset = () => {
  return {
    type: RESET
  }
}

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    payload: cards
  }
}

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE
  }
}

export const incrementRound = () => {
  return {
    type: INCREMENT_ROUND
  }
}

export const changeTeam = () => {
  return {
    type: CHANGE_TEAM
  }
}

export const createGame = (teams) => {
  return {
    type: CREATE_GAME,
    payload: teams
  }
}

export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET:
      return INIT_STATE
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    case INCREMENT_SCORE:
      const newScore = state.score
      newScore[state.currentTeam] = state.score[state.currentTeam] + 1
      return {
        ...state,
        score: newScore
      }
    case INCREMENT_ROUND:
      return {
        ...state,
        currentRound: state.currentRound + 1
      }
    case CHANGE_TEAM:
      const newTeam = getOtherTeam(state.teams, state.currentTeam)
      return {
        ...state,
        currentTeam: newTeam,
        currentTeamColor: state.teamColors[newTeam]
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
        score: { [t1]: 0, [t2]: 0 }
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
