import Axios from 'axios';
import {
  CharacterEntityApi,
  GetCharactersCollectionResponseGraph,
  GetPaginationResponseGraph,
  PaginationInfo

} from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { graphQLClient } from 'core/api';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (page): Promise<CharacterEntityApi[]> => {
  const query = `
    query {
      characters(page: ${page}, filter: {}) {
        results {
          id
          name
          status
          origin{
            name
          }
          location{
            name
          }
          species
          gender
          image
        }
      }
    }
  `;
  const { characters } = await graphQLClient.request<GetCharactersCollectionResponseGraph>(
    query
  );
  return characters.results;
};

export const getPaginationInfo = async (page): Promise<PaginationInfo> => {
  const query = `
    query {
      characters(page: ${page}, filter: {}) {
        info {
          pages
          next
          prev
        }
      }
    }
  `;
  const { characters } = await graphQLClient.request<GetPaginationResponseGraph>(
    query
  );
  console.log({ characters });
  return characters.info;
};
