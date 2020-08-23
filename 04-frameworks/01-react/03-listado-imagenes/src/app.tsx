import React from "react";
import { RouterComponent } from "./router";
import { MyContextProvider } from 'pods/context';
import { AppBarComponent } from 'common/components'

export const App: React.FC = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  )
};
