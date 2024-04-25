// import { createContext, useContext, useEffect, useState } from "react";
// import { getUserFromLocalCookie } from "./auth";

// let userState;

// const User = createContext({ user: null, loading: false})

// export const UserPrvider = ({ value, children }) => {
//     const { user } = value

//     useEffect(() => {
//         if(!userState && user){
//             userState = user
//         }
//     }, [])
//     return <User.Provider value={value}>{children}</User.Provider>
// }

// export const userUser = () => useContext(User)

// export const useFetchUser = () => {
//     const [data, setUser] = useState({
//         user: userState || null,
//         loading: userState === undefined
//     })

//     useEffect(() => {
//         if(userState !== undefined){
//             return
//         }

//         let isMounted = true

//         const user = getUserFromLocalCookie()
//         if(isMounted){
//             setUser({user, loading: false})
//         }

//         return () => {
//             isMounted = false
//         }
//     }, [])

//     return data
// }