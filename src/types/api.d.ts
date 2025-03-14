type Status = "Scheduled" | "Ongoing" | "Finished";

interface Player {
  username: string[];
  kills: number[];
}

interface Team {
  name: string[];
  players: Players[];
  points: number[];
  place: number[];
  total_kills: number[];
}

interface Match {
  time: Date[];
  title: string[];
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number[];
  awayScore: number[];
  status: Status[];
}

interface MatchesResponse {
  data: {
    matches: Match[];
  }
}