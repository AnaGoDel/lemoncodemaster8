import React from "react";
import { EpisodeEntityVM } from "../episode-list.vm";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Box,
  Collapse,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import * as classes from './table-row.styles';

interface Props {
  episode: EpisodeEntityVM;
}

export const TableRowComponent: React.FC<Props> = (props) => {
  const { episode } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover key={episode.id}>
        <TableCell align="center">{episode.episode}</TableCell>
        <TableCell align="center">{episode.name}</TableCell>
        <TableCell align="center">{episode.air_date}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box marginLeft={15}>
              <Typography variant="subtitle1" gutterBottom component="div" color="primary">
                List of characters who have been seen in {episode.episode}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Avatar</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {episode.characters.map(character => (
                    <TableRow key={character.id}>
                      <TableCell component="th" scope="row">
                        <Avatar alt={character.name} src={character.image} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {character.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
