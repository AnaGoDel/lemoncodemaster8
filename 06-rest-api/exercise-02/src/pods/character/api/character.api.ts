import Axios from 'axios';
import { Character } from './character.api-model';

const charactersUrl = 'api/characters';

export const getCharacter = async (id: number): Promise<Character> => {

  const { data } = await Axios.get<Character>(`${charactersUrl}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${charactersUrl}/${character.id}`, character);
  } else {
    await Axios.post<Character>(charactersUrl, character);
  }
  return true;
};
