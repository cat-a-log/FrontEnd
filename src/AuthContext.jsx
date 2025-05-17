import { createContext, useContext } from "react"

const AuthContext = createContext(null)
export const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider>
        {children}
        </AuthContext.Provider> 
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}
