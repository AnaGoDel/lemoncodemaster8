import { CharacterEntityApi } from './character-collection.api-model';

export const mockCharacterCollection: CharacterEntityApi[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth"
    },
    location: {
      name: "Earth"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth"
    },
    location: {
      "name": "Earth"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  }
];
