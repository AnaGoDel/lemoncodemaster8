import Axios from 'axios';
import { CharacterEntityApi, GetResponse } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { graphQLClient } from 'core/api';

let characterCollection = [...mockCharacterCollection];

interface GetCharactersCollectionResponse {
  results: CharacterEntityApi[];
}

interface GetCharactersCollectionResponseGraph {
  characters: GetCharactersCollectionResponse;
}

const charactersUrl = 'https://rickandmortyapi.com/api/character/';
export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = `
    query {
      characters(page: 1, filter: {}) {
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
