import React from 'react';
import { PictureInfo, PictureInfoVM, AppBarComponent, PicturesListComponent } from 'common/components';
import { getCatsList } from './api';
import { mapPicturesListFromApiToViewModel } from 'common/mappers';
import { MyContext } from 'pods/context';
import { CartComponent } from 'pods/cart/cart.component';
const classes = require("./cats-list.styles.scss");

export const CatsListContainer: React.FunctionComponent = () => {
    const [catsList, setCatsList] = React.useState<PictureInfoVM[]>([]);
    const myContext = React.useContext(MyContext);

    const onLoadCatsList = () => {
        const apiCatsList: PictureInfo[] = getCatsList();
        const viewModelCatsList: PictureInfoVM[] = mapPicturesListFromApiToViewModel(apiCatsList);
        viewModelCatsList.map(cat => myContext.picturesCart.find(id => id === cat.id) ? cat.selected = true : cat.selected = false)
        setCatsList(viewModelCatsList);
    };

    const handleCheckCat = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const idSelected = event.target.id;

        const picturesList = catsList.map(cat => {
            if (cat.id === idSelected) !cat.selected;
            return cat;
        });
        setCatsList(picturesList);

        let idList = [...myContext.picturesCart];
        if (checked) {
            idList = idList.find(el => el === idSelected) ? [...idList] : [...idList, idSelected];
        } else {
            idList = idList.filter(el => el !== idSelected);
        }
        myContext.setPicturesCart(idList);
    }

    React.useEffect(() => {
        onLoadCatsList();
    }, [myContext.picturesCart]);

    return (
        <>
            <AppBarComponent />
            <div className={classes.pageContent}>
                <div className={classes.pageMain}>
                    <PicturesListComponent
                        list={catsList}
                        title='Cats'
                        onCheckPicture={handleCheckCat}
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