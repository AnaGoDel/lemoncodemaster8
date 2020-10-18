import React from "react";
import { EpisodeEntityVM } from "./episode-list.vm";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { TableRowComponent } from './components/table-row.component';
import { PaginationComponent, FilterComponent, NoResultComponent } from 'common/components';
import { PaginationInfo } from 'common/components';
import * as classes from './episode-list.styles';

interface Props {
  episodesList: EpisodeEntityVM[];
  noResults: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
  paginationInfo: PaginationInfo;
  currentPage: number;
  label: string,
  onFilter: (filter: string) => void;
}

export const EpisodeListComponent: React.FC<Props> = (props) => {
  const {
    episodesList,
    noResults,
    onNextPage,
    onPreviousPage,
    paginationInfo,
    currentPage,
    label,
    onFilter
  } = props;

  return (
    <>
      <div className={classes.headerBtn}>
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
      {!noResults && (
        <TableContainer>
          <Table>
            <TableHead className={classes.header}>
              <TableRow>
                <TableCell align="center">Episode</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Air date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {episodesList.map(episode =>
                <TableRowComponent
                  key={episode.id}
                  episode={episode}
                />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {noResults && (
        <NoResultComponent />
      )}
    </>
  );
};
