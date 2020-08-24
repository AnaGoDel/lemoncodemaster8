import React from 'react';
import { PictureInfo } from 'common/components';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },

    img: {
        width: '15%',
        height: '15%',
        padding: theme.spacing(1)
    }
}));

interface Props {
    cartList: PictureInfo[];
}

export const CheckOutComponent: React.FC<Props> = ({cartList}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <List>
                    <Typography variant="h6" color="primary">
                        Check Out Page
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary">
                        Go to payment methods
                    </Button>
                    {cartList.map((picture) => (
                        <ListItem key={`item-${picture.id}`}>
                            <img className={classes.img} src={picture.picUrl} alt="" />
                            <ListItemText
                                primary={picture.title}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    );
};