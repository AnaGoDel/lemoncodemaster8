import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getPaginationInfo, PaginationInfo } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = (page: number) => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = (page: number) => {
    getCharacterCollection(page).then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};

export const usePaginationInfo = (page: number) => {
  const [paginationInfo, setPaginationInfo] = React.useState<PaginationInfo>({
    pages: 0,
    next: 'null',
    prev: 'null',
  });

  const loadPaginationInfo = (page: number) => {
    getPaginationInfo(page).then(result => {
      setPaginationInfo(result)
    });
  };

  return { paginationInfo, loadPaginationInfo };
};
