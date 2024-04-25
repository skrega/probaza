// import {API_URL} from "@/config/index"

// export default async (req, res) => {

//     if (req.method === 'POST') {

//         const { identifier, password } = req.body
//         const strapiRes = await fetch(`http://89.223.122.112/auth/local`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": 'application/json'
//             },
//             body: JSON.stringify({
//                 identifier,
//                 password
//             })
//         })
//         console.log(strapiRes)
//         const data = await strapiRes.json()
//         if (strapiRes.ok) {
//             res.status(200).json({
//                 user: data.user
//             })
//         } else {
//             res.status(data.statusCode).json({
//                 message: data.message[0].message[0].message
//             })
//         }
//     } else {

//         res.setHeader("Allow", ['POST'])
//         res.status(405).json({
//             message: `Method ${req.method} not allowed`
//         })
//     }
// }


