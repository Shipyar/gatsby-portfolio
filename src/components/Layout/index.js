import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from 'styled-components';

import {
  GlobalStyles,
  breakpoints,
  colors,
  effects,
  mediaQuery,
} from './styles';

import Header from '../Header';
import Footer from '../Footer';

const theme = {
  breakpoints,
  mediaQuery,
  colors,
  effects,
};


const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <>
        {children}
      </>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout