import React from "react";
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
const classes = require("../styles/members.styles.scss");

interface Props {
    currentPage: number;
    onChangeCurrentPage: (page: number) => void;
    lastPage: number;
}

export const PaginationMembersList: React.FC<Props> = (props) => {
    const { currentPage, onChangeCurrentPage, lastPage } = props;

    const hasNextPage = () => currentPage < lastPage;;
    const hasPreviousPage = () => currentPage > 1;

    const toNextPage = () => {
        const nextPage = currentPage + 1;
        onChangeCurrentPage(nextPage);
    }

    const toPreviousPage = () => {
        const previousPage = currentPage - 1;
        onChangeCurrentPage(previousPage);
    }

    return (
        <div>
            <div className={classes.paginationButtons}>{currentPage}</div>
            <Button variant="contained"
                onClick={toPreviousPage}
                startIcon={<PrevIcon />}
                disabled={!hasPreviousPage()}
            >Prev</Button>
            <Button variant="contained"
                onClick={toNextPage}
                endIcon={<NextIcon />}
                disabled={!hasNextPage()}
            >Next</Button>
        </div>
    );
};