import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { EpisodeListComponent } from './episode-list.component';
import { usePaginationInfo } from './episode-list.hook';
import { mapFromApiToVm } from './episode-list.mapper';
import { getEpisodesList } from './api';
import { EpisodeEntityVM } from './episode-list.vm';

export const EpisodesListContainer = () => {
  const [episodesList, setEpisodesList] = React.useState<EpisodeEntityVM[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { paginationInfo, loadPaginationInfo } = usePaginationInfo();
  const [episodeName, setEpisodeName] = React.useState<string>('');
  const history = useHistory();

  React.useEffect(() => {
    getEpisodesList(currentPage, episodeName).then(result =>
      setEpisodesList(result.map(data => mapFromApiToVm(data))));
    loadPaginationInfo(currentPage, episodeName);
  }, [currentPage, episodeName]);

  const handleDetail = (id: number) => {
    history.push(linkRoutes.detailCharacter(id));
  };

  const handlePreviousPage = () => {
    setCurrentPage(+paginationInfo.prev);
  };

  const handleNextPage = () => {
    setCurrentPage(+paginationInfo.next);
  };

  const handleFilter = (name: string) => {
    setEpisodeName(name);
  }

  return (
    <>
      <EpisodeListComponent
        episodesList={episodesList}
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
