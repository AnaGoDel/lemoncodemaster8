import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { PaginationInfo } from 'common/components';
import { CharacterCard } from './components/character-card.component';
import { PaginationComponent, FilterComponent } from 'common/components';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
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
      <div className={classes.root}>
        <ul className={classes.list}>
          {characterCollection.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} onDetail={onDetailCharacter} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
