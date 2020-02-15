import React, { createContext, useReducer, useContext } from 'react'

const AppState = {
  authenticated: false
}

const AppReducer = (state, action) => {
  switch (action.type) {
  case 'loggedIn': 
    return {
      ...state,
      authenticated: true
    }
  default: 
    return state
  }
}

const AppContext = createContext()
const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(AppReducer, AppState)}>
    {children}
  </AppContext.Provider>
)
const useAppContext = () => useContext(AppContext)

export {
  AppContext,
  AppContextProvider,
  useAppContext
}
