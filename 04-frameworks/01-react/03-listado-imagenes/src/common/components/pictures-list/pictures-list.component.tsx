import React from 'react';
import { PictureInfoVM } from 'common/components';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
const classes = require("./pictures-list.styles.scss");

interface Props {
    list: PictureInfoVM[];
    title: string;
    onCheckPicture: (event, checked) => void;
}

export const PicturesListComponent: React.FC<Props> = ({
    list,
    title,
    onCheckPicture,
}) => {

    return (
        <main>
            <Typography variant="h6">{title}</Typography>
            <section className={classes.picturesContainer}>
                {list.map((item) => (
                    <article key={item.id}>
                        <img className={classes.pictureImg} src={item.picUrl} alt={item.title} />
                        <h1 className={classes.pictureSubheader}>
                            <Typography variant="button">{item.title}</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id={item.id}
                                        checked={item.selected}
                                        onChange={onCheckPicture}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label="Buy"
                            />
                        </h1>
                    </article>
                ))}
            </section>
        </main>
    );
};