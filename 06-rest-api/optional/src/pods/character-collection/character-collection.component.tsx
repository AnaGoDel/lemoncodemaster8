import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import { PaginationComponent, PaginationInfo, FilterComponent, NoResultComponent } from 'common/components';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  noResult: boolean;
  onDetailCharacter: (id: number) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
  paginationInfo: PaginationInfo;
  currentPage: number;
  onFilter: (filter: string) => void;
  label: string;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    noResult,
    onDetailCharacter,
    onPreviousPage,
    onNextPage,
    paginationInfo,
    currentPage,
    onFilter,
    label
  } = props;

  return (
    <>
      <div className={classes.header}>
        <FilterComponent
          onFilter={onFilter}
          label={label}
        />
        <PaginationComponent
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          paginationInfo={paginationInfo}
          currentPage={currentPage}
        />
      </div>
      {!noResult && (
        <div className={classes.root}>
          <ul className={classes.list}>
            {characterCollection.map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} onDetail={onDetailCharacter} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {noResult && (
        <NoResultComponent />
      )}
    </>
  );
};
