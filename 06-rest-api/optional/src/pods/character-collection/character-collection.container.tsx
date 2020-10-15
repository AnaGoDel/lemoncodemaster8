import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection, usePaginationInfo } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { getPaginationInfo, PaginationInfo } from './api';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection(1);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { paginationInfo, loadPaginationInfo } = usePaginationInfo(1);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection(currentPage);
    loadPaginationInfo(currentPage);
  }, [currentPage]);

  const handleDetail = (id: number) => {
    history.push(linkRoutes.detailCharacter(id));
  };

  const handlePreviousPage = () => {
    setCurrentPage(+paginationInfo.prev);
  };

  const handleNextPage = () => {
    setCurrentPage(+paginationInfo.next);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onDetailCharacter={handleDetail}
      onPreviousPage={handlePreviousPage}
      onNextPage={handleNextPage}
      paginationInfo={paginationInfo}
      currentPage={currentPage}
    />
  );
};
