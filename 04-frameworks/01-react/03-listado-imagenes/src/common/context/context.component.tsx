import React from 'react';
import { PictureInfoVM } from 'common/components';

interface Context {
    picturesCart: string[];
    setPicturesCart: (pictureId: string[]) => void;
    cartVisible: boolean;
    setCartVisible: (state: boolean) => void;
}

export const MyContext = React.createContext<Context>({
    picturesCart: [],
    setPicturesCart: (value) => { },
    cartVisible: true,
    setCartVisible: (value) => { },
});

export const MyContextProvider: React.FC = (props) => {
    const { children } = props;
    const [picturesCart, setPicturesCart] = React.useState<string[]>([]);
    const [cartVisible, setCartVisible] = React.useState<boolean>(true);

    return (
        <MyContext.Provider
            value={{
                picturesCart,
                setPicturesCart,
                cartVisible,
                setCartVisible,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};
