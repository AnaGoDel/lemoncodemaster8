import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getPaginationInfo } from './api';
import { PaginationInfo } from 'common/components';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = (page: number, name: string) => {
    getCharacterCollection(page, name).then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};

export const usePaginationInfo = () => {
  const [paginationInfo, setPaginationInfo] = React.useState<PaginationInfo>({
    pages: 0,
    next: '',
    prev: '',
  });

  const loadPaginationInfo = (page: number, name:string) => {
    getPaginationInfo(page, name).then(result => {
      setPaginationInfo(result)
    });
  };

  return { paginationInfo, loadPaginationInfo };
};
