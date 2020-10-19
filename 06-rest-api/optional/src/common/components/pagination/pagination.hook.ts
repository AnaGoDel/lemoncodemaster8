import * as React from 'react';
import { PaginationInfo } from 'common/components';

export const usePaginationInfo = (getPaginationInfo: (page:number, filter: string) => Promise<PaginationInfo>) => {
  const [paginationInfo, setPaginationInfo] = React.useState<PaginationInfo>({
    pages: 0,
    next: '',
    prev: '',
  });

  const loadPaginationInfo = (page: number, filter: string) => {
    getPaginationInfo(page, filter).then(result => {
      setPaginationInfo(result)
    });
  };

  return { paginationInfo, loadPaginationInfo };
};
