import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Location {
    name: string!
    url: string!
  }

  type Character {
    id: number!
    name: string!
    status: string!
    species: string!
    type: string!
    gender: string!
    origin: Location!
    location: Location!
    image: string!
    episode: [string!]!
    url: string!
    created: string!
  }

  type Query {
    characters: [Character!]!
    character(id: ID!): Character!
  }
`;
