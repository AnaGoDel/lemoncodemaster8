import React from "react";
import { LocationEntityVM } from "../location-list.vm";
import {
  Table,
  TableBody,
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
  location: LocationEntityVM;
}

export const TableRowComponent: React.FC<Props> = (props) => {
  const { location } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover key={location.id}>
        <TableCell align="center">{location.name}</TableCell>
        <TableCell align="center">{location.dimension}</TableCell>
        <TableCell align="center">{location.type}</TableCell>
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
                List of characters who have been last seen in {location.name}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Avatar</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {location.residents.map(resident => (
                    <TableRow key={resident.id}>
                      <TableCell component="th" scope="row">
                        <Avatar alt={resident.name} src={resident.image} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {resident.name}
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
