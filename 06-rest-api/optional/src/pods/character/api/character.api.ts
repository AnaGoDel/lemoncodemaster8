import Axios from 'axios';
import { CharacterEntityApi, Quote } from './character.api-model';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  character: CharacterEntityApi;
}

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const query = `
    query {
      character(id: ${id}) {
        id
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

const urlQuotes = 'api/quotes';
export const getQuotesById = async (id: number): Promise<Quote> => {
  const { data } = await Axios.get<Quote>(`${urlQuotes}/${id}`);
  return data;
}

export const saveCharacter = async (quote: Quote): Promise<boolean> => {
  if (quote.id) {
    await Axios.put<Quote>(`${urlQuotes}/${quote.id}`, quote);
  } else {
    await Axios.post<Quote>(urlQuotes, quote);
  }
  return true;
};
