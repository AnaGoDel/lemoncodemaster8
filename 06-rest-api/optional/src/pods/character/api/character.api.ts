import Axios from 'axios';
import { CharacterEntityApi } from './character.api-model';
import { Lookup } from 'common/models';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  character: CharacterEntityApi;
}

const url = 'https://rickandmortyapi.com/api/character/';
export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  // return mockCharacterCollection.find((h) => h.id === id);
  // const { data } = await Axios.get<Character>(`${url}/${id}`);
  // return data;
  const query = `
    query {
      character(id: ${id}) {
        name
        status
        origin{
          name
        }
        location{
          name
        }
        species
        image
      }
    }
  `;
  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );
  return character;
};

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  return true;
};
