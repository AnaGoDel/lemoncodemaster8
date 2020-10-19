export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  origin: '',
  location: '',
  image: '',
});

export interface Quote {
  id: number,
  quote: string,
}

export const createEmptyQuote = (): Quote => ({
  id: 0,
  quote: '',
});

