import * as React from 'react';
import { PaginationInfo } from 'common/components';
import { getPaginationInfo } from './api';
import { mapToCollection } from 'common/mappers';

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
