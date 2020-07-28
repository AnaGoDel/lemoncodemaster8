import React from "react";
import { MemberEntity } from "../../models/member";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;


  return (
    <TableRow>
      <TableCell align="center"><img src={member.avatar_url} style={{ width: "5rem" }} /></TableCell>
      <TableCell align="center">{member.id}</TableCell>
      <TableCell align="center">{member.login}</TableCell>
    </TableRow>
  );
};
