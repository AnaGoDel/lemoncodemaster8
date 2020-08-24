import React from "react";
import { RouterComponent } from "./router";
import { MyContextProvider } from 'common/context';

export const App: React.FC = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  )
};
