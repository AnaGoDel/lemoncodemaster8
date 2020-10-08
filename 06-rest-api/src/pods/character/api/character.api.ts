import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

interface GetLocationsResponse {
  results: Lookup[];
}

const url = 'https://rickandmortyapi.com/api/character/';
export const getCharacter = async (id: number): Promise<Character> => {
  // return mockCharacterCollection.find((h) => h.id === id);
  const { data } = await Axios.get<Character>(`${url}/${id}`);
  return data;
};

const locationsUrl = 'https://rickandmortyapi.com/api/location/';
export const getLocations = async (): Promise<Lookup[]> => {
  return mockCities;
  // const { data } = await Axios.get<GetLocationsResponse>(locationsUrl);
  // console.log({ data });
  // return data.results;
};

export const saveCharacter = async (hotel: Character): Promise<boolean> => {
  return true;
};
