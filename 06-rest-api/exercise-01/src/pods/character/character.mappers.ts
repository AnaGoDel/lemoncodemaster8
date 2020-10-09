import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  origin: character.origin.name,
  location: character.location.name,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    origin: {
      name: character.origin,
      url: ''
    },
    location: {
      name: character.location,
      url: ''
    },
  } as unknown) as apiModel.Character);
