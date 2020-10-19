import React from "react";
import { LocationEntityVM } from "./location-list.vm";
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
import * as classes from './location-list.styles';

interface Props {
  locationsList: LocationEntityVM[];
  noResults: boolean,
  onNextPage: () => void;
  onPreviousPage: () => void;
  paginationInfo: PaginationInfo;
  currentPage: number;
  label: string,
  onFilter: (filter: string) => void;
}

export const EpisodeListComponent: React.FC<Props> = (props) => {
  const {
    locationsList,
    noResults,
    onNextPage,
    onPreviousPage,
    paginationInfo,
    currentPage,
    label,
    onFilter,
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
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Dimension</TableCell>
                <TableCell align="center">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locationsList.map(location =>
                <TableRowComponent
                  key={location.id}
                  location={location}
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
