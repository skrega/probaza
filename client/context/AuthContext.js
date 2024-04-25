// import {createContext,useState,useEffect} from 'react'
// import {useRouter} from 'next/router'
// import { API_URL, NEXT_URL } from '../config'

// const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null)
//     const [error, setError] = useState(null)


//     const signup = async ( user )=>{
//         console.log(user)
//     }

//     const signin = async ({ email:identifier, password }) => {
//         console.log(identifier)
//         const res = await fetch(`http://localhost:3000/api/singin`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": 'application/json'
//             },
//             body: JSON.stringify({ identifier, password })
//         })
//         // alert(typeof res.json())
//         const data = await res.json()
//         console.log(res)
//         if (res.ok) {
//             setUser(data.user)
//             setError(null)
//         } else {
//             setError(data.message)
//             setUser(null)
//         }
//     }
//     // const signin = async ({ email:identifier, password }) => {

//     //     const res = await fetch(`http://localhost:3000/api/singin`, {
//     //         method: 'POST',
//     //         headers: {
//     //             "Content-Type": 'application/json'
//     //         },
//     //         body: JSON.stringify({ identifier, password })
//     //     })
    
//     //     const data = await res.json()
//     //     console.log(data)
//     //     try {
//     //         data = await res.json();
//     //     } catch (error) {
//     //         console.error("Response is not valid JSON:", error);
//     //         return;
//     //     }
    
//     //     if (res.ok) {
//     //         setUser(data.user);
//     //         setError(null);
//     //     } else {
//     //         setError(data.message);
//     //         setUser(null);
//     //     }
//     // }
    
//     const signout = async(user) => {
//         console.log(user)
//     }

//     const checkUserLoggedIn = async(user) => {
//         console.log(user)
//     }
//     // const signin = async ({ email:identifier, password }) => {
//     //     try {
//     //         const res = await fetch(`http://localhost:3000/api/singin`, {
//     //             method: 'POST',
//     //             headers: {
//     //                 "Content-Type": 'application/json'
//     //             },
//     //             body: JSON.stringify({ identifier, password })
//     //         })
    
//     //         if (!res.ok) {
//     //             throw new Error("Failed to sign in")
//     //         }
    
//     //         const contentType = res.headers.get("content-type")
//     //         if (contentType && contentType.includes("application/json")) {
//     //             const data = await res.json()
//     //             setUser(data.user)
//     //             setError(null)
//     //         } else {
//     //             throw new Error("Response is not in JSON format")
//     //         }
//     //     } catch (error) {
//     //         console.error(error.message)
//     //         setError('An error occurred while signing in. Please try again.')
//     //         setUser(null)
//     //     }
//     // }

//     return (
//         <AuthContext.Provider value={{ user, error, signin, signup, signout }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext

