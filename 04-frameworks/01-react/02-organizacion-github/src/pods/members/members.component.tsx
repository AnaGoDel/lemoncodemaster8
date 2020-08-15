import React, { useState } from "react";
import { MemberEntity } from "./members.vm";
import { mapMembersListFromApiToViewModel } from './members.mapper';
import { getMembersAPI, getLastPageAPI } from "./api";
import { Header } from "./components/header";
import { TableRowMembersList, TableHeadMembersList, PaginationMembersList } from "./components/table";
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { Table } from "@material-ui/core";
const classes = require("./styles.scss");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const MemberTable = () => {
  const classesUI = useStyles();

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
      <h1 className={classes.mainTitle}>ORGANIZATION MEMBERS API GITHUB</h1>

      <Header
        organizationName={organizationName}
        onChangeOrganizationName={setOrganizationName}
        loadMembers={onLoadMembers}
      />

      <PaginationMembersList
        currentPage={currentPage}
        onChangeCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />

      <TableContainer>
        <Table className={classesUI.table} aria-label="simple table">
          <TableHeadMembersList />
          <TableBody>
            {members.map((member) => (
              <TableRowMembersList key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  );
}