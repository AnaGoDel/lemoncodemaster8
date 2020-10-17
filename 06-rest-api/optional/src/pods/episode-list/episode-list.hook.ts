import * as React from 'react';
import { PaginationInfo } from 'common/components';
import { getPaginationInfo } from './api';

export const usePaginationInfo = () => {
  const [paginationInfo, setPaginationInfo] = React.useState<PaginationInfo>({
    pages: 0,
    next: 'null',
    prev: 'null',
  });

  const loadPaginationInfo = (page: number, filter: string) => {
    getPaginationInfo(page, filter).then(result => {
      setPaginationInfo(result)
    });
  };

  return { paginationInfo, loadPaginationInfo };
};
