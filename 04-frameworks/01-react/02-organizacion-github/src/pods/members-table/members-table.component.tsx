import React, { useState } from "react";
import { MemberEntity } from "./member.vm";
import { MemberTableRow, MemberTableHead } from "./components";
import { Pagination } from '../members-pagination/pagination';
import { getMembersAPI, isNextPageAvailable } from "./api";
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { Table } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const MemberTable = () => {
  const classes = useStyles();

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName, setOrganizationName] = React.useState<string>("lemoncode");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [nextAvailable, setNextAvailable] = React.useState<boolean>(true);

  const loadMembers = (page) => {
    getMembersAPI(organizationName)(page).then(members => setMembers(members));
    isNextPageAvailable(organizationName, page + 1).then(res => setNextAvailable(res));
  };

  React.useEffect(() => {
    if (organizationName != "") {
      loadMembers(currentPage);
    }
  }, [currentPage]);

  return (
    <div>
      <TextField
        label="Organization"
        id="outlined-size-small"
        defaultValue={organizationName}
        variant="outlined"
        size="small"
        onChange={e => setOrganizationName(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={() => (currentPage === 1) ? loadMembers(currentPage) : setCurrentPage(1)}>
        Load
      </Button>
      <h1>{currentPage}</h1>
      <h1>lastPage: {nextAvailable}</h1>
      <Pagination
        page={currentPage}
        onChangePage={setCurrentPage}
        nextAvailable={nextAvailable}
      />

      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <MemberTableHead />
          <TableBody>
            {members.map((member) => (
              <MemberTableRow key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  );
}