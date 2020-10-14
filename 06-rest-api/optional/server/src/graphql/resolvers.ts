import {
  getCharacter,
  getCharactersList,
  Character,
} from '../db';

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharactersList();
      return characters;
    },
    character: async (parent, args): Promise<Character> => {
      const character = await getCharacter(args.id);
      return character;
    },
  }
}
