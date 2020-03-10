
export const TEAM_COLORS = ['#0E71FF', '#0EBE00']

export const getOtherTeam = (teams, currentTeam) => {
  const other = teams[(teams.indexOf(currentTeam) + 1) % 2]
  return other
}
