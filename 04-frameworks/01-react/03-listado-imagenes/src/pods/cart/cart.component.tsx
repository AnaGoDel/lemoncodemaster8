import React from 'react';
import { MyContext } from 'pods/context';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { PictureInfo } from 'common/components';
import { getCatsList } from 'pods/cats-list/api';
import { getDogsList } from 'pods/dogs-list/api';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        minWidth: '330px',
        padding: theme.spacing(2),
    },

    img: {
        width: '15%',
        height: '15%',
        padding: theme.spacing(1)
    }
}));

export const CartComponent: React.FC = () => {
    const classes = useStyles();
    const myContext = React.useContext(MyContext);
    const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

    const getDetails = () => {
        const pictures: PictureInfo[] = [...getCatsList(), ...getDogsList()];
        const cart: PictureInfo[] = myContext.picturesCart.map(el => pictures.find(pic => pic.id === el))
        setCartList(cart);
    }

    const onDeleteItem = (event: React.FormEvent<HTMLButtonElement>) => {
        const cart = myContext.picturesCart.filter(el => el !== event.currentTarget.id.slice(5));
        myContext.setPicturesCart(cart);
    }

    React.useEffect(() => {
        getDetails();
    }, [myContext.picturesCart]);

    return (
        <>
            <Paper className={classes.root}>
                <List>
                    <Typography variant="h6">
                        You have {cartList.length} in the cart
                    </Typography>
                    {cartList.map((picture) => (
                        <ListItem key={`item-${picture.id}`}>
                            {/* <div> */}
                            <img className={classes.img} src={picture.picUrl} alt="" />
                            {/* </div> */}
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
            </Paper>
        </>
    );
};