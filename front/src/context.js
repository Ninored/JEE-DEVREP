import React, { createContext, useReducer, useContext } from 'react'

const AppState = {
  username: '',
  password: '',
  authenticated: false
}

const AppReducer = (state, action) => {
  switch (action.type) {
  case 'loggedIn': 
    return {
      ...state,
      username: action.value.username,
      password: action.value.password,
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
