import React from 'react';
import { PictureInfo, PictureInfoVM } from 'common/components';
import { mapPicturesListFromApiToViewModel } from 'common/mappers';
import { MyContext } from 'common/context';
import { getDogsList } from './api';
import { DogsListComponent } from './dogs-list.component';

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
        <DogsListComponent
            list={dogsList}
            title="Dogs"
            onCheckPicture={handleCheckDog}
            cartVisible={myContext.cartVisible}
        />
    );
}