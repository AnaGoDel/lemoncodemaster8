import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { usePaginationInfo } from 'common/components/pagination';
import { getPaginationInfo } from './api';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { paginationInfo, loadPaginationInfo } = usePaginationInfo(getPaginationInfo);
  const [characterName, setCharacterName] = React.useState<string>('');
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection(currentPage, characterName);
    loadPaginationInfo(currentPage, characterName);
  }, [currentPage, characterName]);

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
    setCharacterName(name);
    setCurrentPage(1);
  }

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onDetailCharacter={handleDetail}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        paginationInfo={paginationInfo}
        currentPage={currentPage}
        onFilter={handleFilter}
        label={'Character name'}
      />
    </>
  );
};
