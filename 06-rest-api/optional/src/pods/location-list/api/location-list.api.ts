import {
  LocationEntityApi,
  GetPaginationResponseGraph,
  LocationsListResponseGraphql
} from './location-list.api-model';
import { PaginationInfo } from 'common/components';
import { graphQLClient } from 'core/api';

export const getLocationsList = async (page: number, filter: string): Promise<LocationEntityApi[]> => {
  const query = `
    query {
      locations(page: ${page}, filter: { name: "${filter}"}) {
        results {
          id
          name
          type
          dimension
          residents{
            id
            name
            image
          }
        }
      }
    }
  `;
  const { locations } = await graphQLClient.request<LocationsListResponseGraphql>(
    query
  );
  return locations.results;
};

export const getPaginationInfo = async (page: number, filter: string): Promise<PaginationInfo> => {
  const query = `
    query {
      locations(page: ${page}, filter: { name: "${filter}"}) {
        info {
          pages
          next
          prev
        }
      }
    }
  `;
  const { locations } = await graphQLClient.request<GetPaginationResponseGraph>(
    query
  );
  return locations.info;
};
