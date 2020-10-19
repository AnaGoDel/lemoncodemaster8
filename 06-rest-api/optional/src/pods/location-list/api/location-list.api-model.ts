import { PaginationInfo } from 'common/components';

interface Residents {
  id: number,
  name: string,
  image: string,
}

export interface LocationEntityApi {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: Residents[],
}

export interface LocationsListResponse {
  results: LocationEntityApi[];
}

export interface LocationsListResponseGraphql {
  locations: LocationsListResponse;
}

interface GetPaginationInfoResponse {
  info: PaginationInfo;
}

export interface GetPaginationResponseGraph {
  locations: GetPaginationInfoResponse;
}
