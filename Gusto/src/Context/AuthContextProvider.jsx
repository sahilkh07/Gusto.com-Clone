import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

export default function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState(false)
    const  toggleAuth=()=>{
        return setIsAuth(!isAuth)
    }
   return <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>

}