import React from "react";
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import PrevIcon from '@material-ui/icons/ArrowBackIos';

interface Props {
    page: number;
    onChangePage: (page: number) => void;
    nextAvailable: boolean;
}

export const Pagination: React.FC<Props> = (props) => {
    const { page, onChangePage, nextAvailable } = props;

    const toNextPage = () => {
        const nextPage = page + 1;
        onChangePage(nextPage);
    }

    const toPreviousPage = () => {
        if (page > 1) {
            const previousPage = page - 1;
            onChangePage(previousPage);
        }
    }

    return (
        <div>
            <Button variant="contained"
                onClick={toPreviousPage}
                startIcon={<PrevIcon />}
            >Prev</Button>
            <Button variant="contained"
                onClick={toNextPage}
                endIcon={<NextIcon />}
                disabled={!nextAvailable}
            >Next</Button>
        </div>
    );
};