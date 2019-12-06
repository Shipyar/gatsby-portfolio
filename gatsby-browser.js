import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import AppProvider from './src/context/AppContext';
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <AppProvider>
      {element}
    </AppProvider>
  </ThemeProvider>
)