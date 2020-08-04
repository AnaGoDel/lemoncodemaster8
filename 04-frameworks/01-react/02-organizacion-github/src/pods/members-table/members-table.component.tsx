import React, { useState } from "react";
import { MemberEntity } from "./members.vm";
import { mapMembersListFromApiToViewModel } from './members.mapper';
import { getMembersAPI, getLastPageAPI } from "./api";
import { MemberTableRow, MemberTableHead, PaginationMembersList } from "./components";
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
  const [lastPage, setLastPage] = React.useState<number>(1);

  const getMembersPage = (page) => {
    getMembersAPI(organizationName)(page).then(membersList => {
      const viewModelMembersList = mapMembersListFromApiToViewModel(membersList);
      setMembers(viewModelMembersList);
    });
  };

  const onLoadMembers = () => {
    setCurrentPage(1);
    getMembersPage(1);
    getLastPageAPI(organizationName).then(lastPage => setLastPage(lastPage));
  }

  React.useEffect(() => {
    if (organizationName != "") {
      getMembersPage(currentPage);
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
        onClick={onLoadMembers}>
        Load
      </Button>

      <PaginationMembersList
        currentPage={currentPage}
        onChangeCurrentPage={setCurrentPage}
        lastPage={lastPage}
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