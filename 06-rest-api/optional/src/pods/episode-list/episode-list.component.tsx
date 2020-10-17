import React from "react";
import { EpisodeEntityVM } from "./episode-list.vm";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import * as classes from './episode-list.styles';

interface Props {
  episodesList: EpisodeEntityVM[];
}

export const EpisodeListComponent: React.FC<Props> = (props) => {
  const { episodesList } = props;

  return (
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
            <TableRow hover key={episode.id}>
              <TableCell align="center">{episode.episode}</TableCell>
              <TableCell align="center">{episode.name}</TableCell>
              <TableCell align="center">{episode.air_date}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
