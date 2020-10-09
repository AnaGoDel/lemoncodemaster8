import Axios from 'axios';
import { CharacterEntityApi, GetResponse } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

const charactersUrl = 'https://rickandmortyapi.com/api/character/';
export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  // return characterCollection;
  const { data } = await Axios.get<GetResponse>(charactersUrl);
  return data.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
