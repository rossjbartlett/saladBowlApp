import { createStore, combineReducers } from 'redux'

const SET_CARDS = "SET_CARDS"
const SET_CARDS_IN_BOWL = "SET_CARDS_IN_BOWL"

export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    payload: cards
  }
}

export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }
    default:
      return state
  }
}

const configureStore = () => createStore(rootReducer)

export default configureStore