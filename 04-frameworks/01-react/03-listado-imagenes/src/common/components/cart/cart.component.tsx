import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'router/routes';
import { PictureInfo } from 'common/components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

interface Props {
    cartList: PictureInfo[];
    contextCart: string[];
    onDeleteAll: (event) => void;
    onDeleteItem: (event) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        minWidth: '250px',
        padding: theme.spacing(2),
    },

    img: {
        width: '15%',
        height: '15%',
        padding: theme.spacing(1)
    }
}));

export const CartComponent: React.FC<Props> = ({
    cartList,
    contextCart,
    onDeleteAll,
    onDeleteItem,
}) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root}>
                <List>
                    <Typography variant="h6">
                        You have {cartList.length} in the cart
                    </Typography>
                    <Button
                        color="primary"
                        disabled={contextCart.length === 0}
                        onClick={onDeleteAll}>
                        Delete All
                    </Button>
                    {cartList.map((picture) => (
                        <ListItem key={`item-${picture.id}`}>
                            <img className={classes.img} src={picture.picUrl} alt="" />
                            <ListItemText
                                primary={picture.title}
                            />
                            <ListItemIcon>
                                <IconButton edge="end" aria-label="delete" onClick={onDeleteItem}
                                    id={`item-${picture.id}`}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={contextCart.length === 0}
                    component={Link}
                    to={switchRoutes.checkout}>
                    Check out
                </Button>
            </Paper>
        </>
    );
};