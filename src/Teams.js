// import store from './redux';

// const BLUE = 'BLUE'
// const GREEN = 'GREEN'
// const TEAMS = [BLUE, GREEN]

// const teamColors = ['#0E71FF', '#0EBE00']  //. TODO store in redux? name -> color

// export const getCurrentTeamColor = () => {
//   const teams = store.getState().teams
//   const currentTeam = store.getState().currentTeam
//   const color = teamColors[teams.indexOf(currentTeam)]
//   console.log("getCurrentTeamColor(): team", currentTeam, " = ", color)
//   return color
// }

export const TEAM_COLORS = ['#0E71FF', '#0EBE00']

export const getOtherTeam = (teams, currentTeam) => {
  const other = teams[(teams.indexOf(currentTeam) + 1) % 2]
  console.log("getOtherTeam(): currentTeam ", currentTeam, ' other ', other)
  return other
}