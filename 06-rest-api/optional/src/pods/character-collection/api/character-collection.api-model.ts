import { common } from "@material-ui/core/colors";
import { PaginationInfo } from 'common/components'

export interface GetResponse {
  results: CharacterEntityApi[],
}

export interface CharacterEntityApi {
  id: number;
  name: string,
  status: string,
  species: string,
  gender: string,
  origin: {
    name: string
  },
  location: {
    name: string
  },
  image: string,
}

interface GetCharactersCollectionResponse {
  results: CharacterEntityApi[];
}

export interface GetCharactersCollectionResponseGraph {
  characters: GetCharactersCollectionResponse;

}

interface GetPaginationInfoResponse {
  info: PaginationInfo;
}

export interface GetPaginationResponseGraph {
  characters: GetPaginationInfoResponse;
}
