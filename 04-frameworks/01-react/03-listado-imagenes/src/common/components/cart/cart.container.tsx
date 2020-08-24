import React from 'react';
import { PictureInfo } from 'common/components';
import { MyContext } from 'common/context';
import { getCatsList } from 'pods/cats-list/api';
import { getDogsList } from 'pods/dogs-list/api';
import { CartComponent } from './cart.component';

export const CartContainer: React.FC = () => {
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

    const onDeleteAll = (event: React.FormEvent<HTMLButtonElement>) => {
        myContext.setPicturesCart([]);
    }

    React.useEffect(() => {
        getDetails();
    }, [myContext.picturesCart]);

    return (
        <>
            <CartComponent
                cartList={cartList}
                contextCart={myContext.picturesCart}
                onDeleteAll={onDeleteAll}
                onDeleteItem={onDeleteItem}
            />
        </>
    );
};