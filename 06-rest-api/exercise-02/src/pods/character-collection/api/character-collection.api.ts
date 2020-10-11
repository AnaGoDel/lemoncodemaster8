import Axios from 'axios';
import { CharacterEntityApi, GetResponse } from './character-collection.api-model';

const charactersUrl = 'api/characters';
export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(charactersUrl);
  return data;
};

