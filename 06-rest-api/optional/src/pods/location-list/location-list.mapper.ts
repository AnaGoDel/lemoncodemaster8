import * as apiModel from './api/location-list.api-model';
import * as viewModel from './location-list.vm';

export const mapFromApiToVm = (
  location: apiModel.LocationEntityApi
): viewModel.LocationEntityVM => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residents: location.residents.map(resident => {return { id: resident.id, name: resident.name, image: resident.image }}
  )
});
