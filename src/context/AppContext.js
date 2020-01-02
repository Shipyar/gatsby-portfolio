import React, { useState, useEffect, useRef, createContext } from "react"

const defaultState = {
  isLoading: false,
  menuOpen: false,
  isMobile: false,
  width: 0,
  height: 0,
}

const AppContext = createContext(defaultState)

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(769)
  const [height, setHeight] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (width <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
        setMenuOpen(false)
      }
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
    updateWindowDimensions()

    window.addEventListener("resize", updateWindowDimensions)

    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [width])

  const handleLoading = e => {
    e.preventDefault()
    setIsLoading(!isLoading)
  }

  const handleMenuClicked = e => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isMobile,
        menuOpen,
        width,
        height,
        toastRef: ref,
        setMenuOpen: e => handleMenuClicked(e),
        setIsLoading: e => handleLoading(e),   
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer

export default AppProvider
export { AppConsumer, AppContext }
