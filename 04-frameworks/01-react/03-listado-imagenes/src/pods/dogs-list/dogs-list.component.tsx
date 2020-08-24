import React from 'react';
import { PictureInfoVM, AppBarComponent, PicturesListComponent } from 'common/components';
import { CartContainer } from 'common/components/cart';
const classes = require("./dogs-list.styles.scss");

interface Props {
    list: PictureInfoVM[];
    title: string;
    onCheckPicture: (event, checked) => void;
    cartVisible: boolean;
}

export const DogsListComponent: React.FC<Props> = ({
    list,
    title,
    onCheckPicture,
    cartVisible
}) => {
    return (
        <>
            <AppBarComponent />
            <div className={classes.pageContent}>
                <div className={classes.pageMain}>
                    <PicturesListComponent
                        list={list}
                        title={title}
                        onCheckPicture={onCheckPicture}
                    />
                </div>
                {cartVisible &&
                    <div className={classes.pageSidebar}>
                        <CartContainer />
                    </div>}
            </div>
        </>
    );
}