import { CharacterEntityApi } from './character.api-model';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  character: CharacterEntityApi;
}

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
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
