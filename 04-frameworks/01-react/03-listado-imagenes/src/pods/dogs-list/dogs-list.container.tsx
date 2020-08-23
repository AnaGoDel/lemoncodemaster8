import React from 'react';
import { getDogsList } from './api';
import { PictureInfo, PictureInfoVM, AppBarComponent, PicturesListComponent } from 'common/components';
import { mapPicturesListFromApiToViewModel } from 'common/mappers';
import { MyContext } from 'pods/context';
import { CartComponent } from 'pods/cart/cart.component';
const classes = require("./dogs-list.styles.scss");

export const DogsListContainer: React.FunctionComponent = () => {
    const [dogsList, setDogsList] = React.useState<PictureInfoVM[]>([]);
    const myContext = React.useContext(MyContext);

    const onLoadDogsList = () => {
        const apiDogsList: PictureInfo[] = getDogsList();
        const viewModelPictureList: PictureInfoVM[] = mapPicturesListFromApiToViewModel(apiDogsList);
        viewModelPictureList.map(dog => myContext.picturesCart.find(id => id === dog.id) ? dog.selected = true : dog.selected = false)
        setDogsList(viewModelPictureList);
    };

    const handleCheckDog = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const idSelected = event.target.id;

        const picturesList = dogsList.map(cat => {
            cat.id === idSelected ? cat.selected = checked : cat.selected;
            return cat;
        });
        console.log({ picturesList });
        setDogsList(picturesList);

        let idList = [...myContext.picturesCart];
        if (checked) {
            idList = idList.find(el => el === idSelected) ? [...idList] : [...idList, idSelected];
        } else {
            idList = idList.filter(el => el !== idSelected);
        }
        console.log({ idList });
        myContext.setPicturesCart(idList);
    }

    React.useEffect(() => {
        onLoadDogsList();
    }, [myContext.picturesCart]);

    return (
        <>
            <AppBarComponent />
            <div className={classes.pageContent}>
                <div className={classes.pageMain}>
                    <PicturesListComponent
                        list={dogsList}
                        title='Dogs'
                        onCheckPicture={handleCheckDog}
                    />
                </div>
                {myContext.cartVisible &&
                    <div className={classes.pageSidebar}>
                        <CartComponent />
                    </div>}
            </div>
        </>
    );
}