import React from 'react'

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserCosumer = UserContext.Consumer

export {UserProvider, UserCosumer}