import * as React from 'react';
import { usePaginationInfo } from 'common/components/pagination';
import { EpisodeListComponent } from './location-list.component';
import { mapFromApiToVm } from './location-list.mapper';
import { getLocationsList, getPaginationInfo } from './api';
import { LocationEntityVM } from './location-list.vm';

export const LocationListContainer = () => {
  const [locationsList, setLocationsList] = React.useState<LocationEntityVM[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { paginationInfo, loadPaginationInfo } = usePaginationInfo(getPaginationInfo);
  const [locationName, setLocationName] = React.useState<string>('');
  const [noResults, setNoResults] = React.useState<boolean>(false);

  React.useEffect(() => {
    getLocationsList(currentPage, locationName)
      .then(result => {
        setLocationsList(result.map(data => mapFromApiToVm(data)))
        setNoResults(false)
      })
      .catch(error => setNoResults(true));
    loadPaginationInfo(currentPage, locationName);
  }, [currentPage, locationName]);

  const handlePreviousPage = () => {
    setCurrentPage(+paginationInfo.prev);
  };

  const handleNextPage = () => {
    setCurrentPage(+paginationInfo.next);
  };

  const handleFilter = (name: string) => {
    setLocationName(name);
    setCurrentPage(1);
  }

  return (
    <>
      <EpisodeListComponent
        locationsList={locationsList}
        noResults={noResults}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        paginationInfo={paginationInfo}
        currentPage={currentPage}
        label="Location name"
        onFilter={handleFilter}
      />
    </>
  );
};
