import * as React from 'react';
import { EpisodeListComponent } from './episode-list.component';
import { mapFromApiToVm } from './episode-list.mapper';
import { getEpisodesList, getPaginationInfo } from './api';
import { EpisodeEntityVM } from './episode-list.vm';
import { usePaginationInfo } from 'common/components/pagination';

export const EpisodesListContainer = () => {
  const [episodesList, setEpisodesList] = React.useState<EpisodeEntityVM[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { paginationInfo, loadPaginationInfo } = usePaginationInfo(getPaginationInfo);
  const [episodeName, setEpisodeName] = React.useState<string>('');
  const [noResults, setNoResults] = React.useState<boolean>(false);

  React.useEffect(() => {
    getEpisodesList(currentPage, episodeName)
    .then(result =>{
      setEpisodesList(result.map(data => mapFromApiToVm(data)))
      setNoResults(false)
    })
    .catch(error => setNoResults(true));

    loadPaginationInfo(currentPage, episodeName);
  }, [currentPage, episodeName]);

  const handlePreviousPage = () => {
    setCurrentPage(+paginationInfo.prev);
  };

  const handleNextPage = () => {
    setCurrentPage(+paginationInfo.next);
  };

  const handleFilter = (name: string) => {
    setEpisodeName(name);
    setCurrentPage(1);
  }

  return (
    <>
      <EpisodeListComponent
        episodesList={episodesList}
        noResults={noResults}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        paginationInfo={paginationInfo}
        currentPage={currentPage}
        label="Episode name"
        onFilter={handleFilter}
      />
    </>
  );
};
