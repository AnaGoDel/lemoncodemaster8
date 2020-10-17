import * as apiModel from './api/episode-list.api-model';
import * as viewModel from './episode-list.vm';

export const mapFromApiToVm = (
  episode: apiModel.EpisodeEntityApi
): viewModel.EpisodeEntityVM => ({
  id: episode.id,
  name: episode.name,
  air_date: episode.air_date,
  episode: `Season ${episode.episode.slice(2, 3)} Episode ${episode.episode.slice(4, 6)}`,
});
