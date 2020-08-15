import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const classesHeader = require("./members-header.styles.scss");

interface Props {
    organizationName: string;
    onChangeOrganizationName: (organizationName: string) => void;
    loadMembers: () => void;
}

export const Header: React.FC<Props> = (props) => {
    const { organizationName, onChangeOrganizationName, loadMembers } = props;
    return (
        <div className={classesHeader.organizationInput}>
            <TextField
                label="Organization"
                id="outlined-size-small"
                defaultValue={organizationName}
                variant="outlined"
                color="secondary"
                size="small"
                onChange={e => onChangeOrganizationName(e.target.value)}
            />

            <Button
                variant="contained"
                color="secondary"
                onClick={loadMembers}>
                Load
            </Button>
        </div>
    );
};