import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

const url = 'https://rickandmortyapi.com/api/character/';
export const getCharacter = async (id: number): Promise<Character> => {
  // return mockCharacterCollection.find((h) => h.id === id);
  const { data } = await Axios.get<Character>(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
