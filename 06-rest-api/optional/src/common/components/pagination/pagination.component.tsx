import * as React from 'react';
import { PaginationInfo } from './pagination.model';
import { Typography, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import * as classes from './pagination.styles';

interface Props {
  onNextPage: () => void;
  onPreviousPage: () => void;
  paginationInfo: PaginationInfo;
  currentPage: number;
}

export const PaginationComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { onPreviousPage, onNextPage, paginationInfo, currentPage } = props;

  return (
    <div className={classes.pagination}>
      <IconButton className={classes.arrowBtn} size="small" onClick={onPreviousPage} disabled={paginationInfo.prev === null}>
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>
      <Typography variant="subtitle1">Page {currentPage} of {paginationInfo.pages}</Typography>
      <IconButton className={classes.arrowBtn} size="small" onClick={onNextPage} disabled={paginationInfo.next === null}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </div>
  );
};
