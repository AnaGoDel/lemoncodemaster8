import React from 'react';
import { MyContext } from 'pods/context';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PictureInfo } from 'common/components';
import { getCatsList } from 'pods/cats-list/api';
import { getDogsList } from 'pods/dogs-list/api';

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

export const CheckOutContainer: React.FC = () => {
    const classes = useStyles();
    const myContext = React.useContext(MyContext);
    const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

    const getDetails = () => {
        const pictures: PictureInfo[] = [...getCatsList(), ...getDogsList()];
        const cart: PictureInfo[] = myContext.picturesCart.map(el => pictures.find(pic => pic.id === el))
        setCartList(cart);
    }

    React.useEffect(() => {
        getDetails();
    }, [myContext.picturesCart]);

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