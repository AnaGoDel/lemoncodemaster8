import { PaginationInfo } from 'common/components';

interface Character {
  id: number,
  name: string,
  image: string,
}

export interface EpisodeEntityApi {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Character[],
}

export interface EpisodesListResponse {
  results: EpisodeEntityApi[];
}

export interface EpisodesListResponseGraphql {
  episodes: EpisodesListResponse;
}

interface GetPaginationInfoResponse {
  info: PaginationInfo;
}

export interface GetPaginationResponseGraph {
  episodes: GetPaginationInfoResponse;
}
