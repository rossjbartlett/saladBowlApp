
const BLUE = 'BLUE'
const GREEN = 'GREEN'
const TEAMS = [BLUE, GREEN]

const teamColor = {
  BLUE: '#0E71FF',
  GREEN: '#0EBE00',
}

export const getTeamColor = (team) => {
  console.log("get color for team", team, " :", teamColor[team])
  return teamColor[team]
}

export const getOtherTeam = (currentTeam) => {
  console.log("get other team returning ", currentTeam === BLUE ? GREEN : BLUE)
  return currentTeam === BLUE ? GREEN : BLUE
}