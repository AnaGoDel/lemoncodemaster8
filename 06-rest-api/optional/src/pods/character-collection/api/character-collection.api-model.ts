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

export interface PaginationInfo {
  pages: number,
  next: string,
  prev: string,
}

interface GetPaginationInfoResponse {
  info: PaginationInfo;
}

export interface GetPaginationResponseGraph {
  characters: GetPaginationInfoResponse;
}
