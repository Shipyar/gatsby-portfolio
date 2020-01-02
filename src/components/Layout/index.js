import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import ThemeContext from '../../context/ThemeContext'

import {
  GlobalStyles,
  breakpoints,
  light,
  darkTheme,
  effects,
  mediaQuery,
} from './styles'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  const { dark } = useContext(ThemeContext)

  const [theme, setTheme] = useState({
    breakpoints,
    mediaQuery,
    colors: light,
    effects,
  })

  // When dark is true we want to change a theme state to be dark
  useEffect(() => {
    if (dark) {
      setTheme({
        breakpoints,
        mediaQuery,
        colors: darkTheme,
        effects,
      })
    } else {
      setTheme({
        breakpoints,
        mediaQuery,
        colors: light,
        effects,
      })
    }
  }, [dark])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <>{children}</>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
