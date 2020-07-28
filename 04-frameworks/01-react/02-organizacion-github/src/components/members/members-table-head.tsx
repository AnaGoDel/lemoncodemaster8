import React from "react";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const MemberTableHead: React.FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
            </TableRow>
        </TableHead>
    );
};