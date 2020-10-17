import { PaginationInfo } from 'common/components';

export interface EpisodeEntityApi {
  id: number,
  name: string,
  air_date: string,
  episode: string,
}

export const CreateEpisodeInitial = {
  id: 0,
  name: '',
  air_date: '',
  episode: '',
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
