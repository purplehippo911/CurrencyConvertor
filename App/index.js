import React from "react";
import { Navigation } from "./config/Navigation";
import { ConversionContextProvider } from "./utils/ConversionContext";

export default () => (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
