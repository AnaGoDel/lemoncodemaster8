import React from 'react';
import { PictureInfoVM } from 'common/components';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'white',
    },
}));

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{title}</ListSubheader>
                </GridListTile>
                {list.map((item) => (
                    <GridListTile key={item.id}>
                        <img src={item.picUrl} alt={item.title} />
                        <GridListTileBar
                            title={item.title}
                            actionIcon={
                                <FormControlLabel
                                    className={classes.icon}
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

                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};