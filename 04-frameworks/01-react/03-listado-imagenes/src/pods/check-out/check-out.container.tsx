import React from 'react';
import { MyContext } from 'common/context';
import { makeStyles } from '@material-ui/core/styles';
import { PictureInfo } from 'common/components';
import { getCatsList } from 'pods/cats-list/api';
import { getDogsList } from 'pods/dogs-list/api';
import { CheckOutComponent } from './check-out.component';

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
        <CheckOutComponent
            cartList={cartList}
        />
    );
};