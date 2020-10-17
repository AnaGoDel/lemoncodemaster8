import {
  EpisodeEntityApi,
  EpisodesListResponseGraphql,
  GetPaginationResponseGraph
} from './episode-list.api-model';
import { PaginationInfo } from 'common/components';
import { graphQLClient } from 'core/api';

export const getEpisodesList = async (page): Promise<EpisodeEntityApi[]> => {
  const query = `
    query {
      episodes(page: ${page}, filter: { }) {
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `;
  const { episodes } = await graphQLClient.request<EpisodesListResponseGraphql>(
    query
  );
  return episodes.results;
};

export const getPaginationInfo = async (page): Promise<PaginationInfo> => {
  const query = `
    query {
      episodes(page: ${page}, filter: {}) {
        info {
          pages
          next
          prev
        }
      }
    }
  `;
  const { episodes } = await graphQLClient.request<GetPaginationResponseGraph>(
    query
  );
  return episodes.info;
};
