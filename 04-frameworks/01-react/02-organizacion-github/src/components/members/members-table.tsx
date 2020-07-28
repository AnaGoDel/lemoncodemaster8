import React, { useState } from "react";
import { MemberEntity } from "../../models/member";
import { MemberTableRow } from "./members-table-row";
import { MemberTableHead } from "./members-table-head";
import { getMembersAPI } from "../../api/membersAPI";
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { Table } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import PrevIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const MemberTable = () => {
  const classes = useStyles();

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName, setOrganizationName] = React.useState<string>("microsoft");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const pageRef = React.useRef(currentPage);

  const loadMembers = (page) => {
    getMembersAPI(organizationName)(page).then(members => setMembers(members));
    console.log(members);
  };

  const toNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    pageRef.current = nextPage;
    loadMembers(pageRef.current);
  }

  const toPreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      pageRef.current = previousPage;
      loadMembers(pageRef.current);
    }
  }

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

      <Button variant="contained" onClick={loadMembers}>Load</Button>

      <Button variant="contained"
        onClick={toPreviousPage}
        startIcon={<PrevIcon />}
      >Prev</Button>
      <Button variant="contained"
        onClick={toNextPage}
        endIcon={<NextIcon />}
      >Next</Button>

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