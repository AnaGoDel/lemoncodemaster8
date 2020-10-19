export interface EpisodeEntityVM {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Character[],
}

interface Character {
  id: number,
  name: string,
  image: string,
}
