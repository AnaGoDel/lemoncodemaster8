import Axios from 'axios';
import {
  CharacterEntityApi,
  GetCharactersCollectionResponseGraph,
  GetPaginationResponseGraph,
} from './character-collection.api-model';
import { PaginationInfo } from 'common/components';
import { mockCharacterCollection } from './character-collection.mock-data';
import { graphQLClient } from 'core/api';

export const getCharacterCollection = async (page: number, name: string): Promise<CharacterEntityApi[]> => {
  const query = `
    query {
      characters(page: ${page}, filter: { name: "${name}" }) {
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
  console.log({ characters });
  return characters.results;
};

export const getPaginationInfo = async (page: number, name: string): Promise<PaginationInfo> => {
  const query = `
    query {
      characters(page: ${page}, filter: { name: "${name}"}) {
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
  return characters.info;
};
