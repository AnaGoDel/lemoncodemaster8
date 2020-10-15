import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { PaginationInfo } from './api';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Typography } from '@material-ui/core';

interface Props {
  characterCollection: CharacterEntityVm[];
  onDetailCharacter: (id: number) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
  paginationInfo: PaginationInfo;
  currentPage: number;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onDetailCharacter, onPreviousPage, onNextPage, paginationInfo, currentPage } = props;

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        <Button variant="contained" color="primary" onClick={onPreviousPage} disabled={paginationInfo.prev === null}>
          Previous
        </Button>
        <Typography variant="h6">Page {currentPage} of {paginationInfo.pages}</Typography>
        <Button variant="contained" color="primary" onClick={onNextPage} disabled={paginationInfo.next === null}>
          Next
        </Button>
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetail={onDetailCharacter} />
          </li>
        ))}
      </ul>
    </div>
  );
};
