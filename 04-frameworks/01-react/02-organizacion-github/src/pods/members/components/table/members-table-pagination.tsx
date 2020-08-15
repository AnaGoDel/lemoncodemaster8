import React from "react";
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import PrevIcon from '@material-ui/icons/ArrowBackIos';
const classes = require("./members-table.styles.scss");

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
        <div className={classes.paginationContent}>
            <Button variant="contained"
                color="secondary"
                onClick={toPreviousPage}
                startIcon={<PrevIcon />}
                disabled={!hasPreviousPage()}
            >Prev</Button>

            <div className={classes.pagination}>Page {currentPage} of {lastPage}</div>

            <Button variant="contained"
                color="secondary"
                onClick={toNextPage}
                endIcon={<NextIcon />}
                disabled={!hasNextPage()}
            >Next</Button>
        </div>
    );
};