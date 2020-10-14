import crypto from 'crypto';
import { mockCharacters } from './mock-data';
import { Character } from './models';

let characters = [...mockCharacters];

export const getCharactersList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: number): Promise<Character> =>
  characters.find((c) => c.id === id);
