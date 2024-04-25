import React from 'react'
import ObjectAdd from '@/components/pages/ObjectAdd/ObjectAdd'

// export default function AddObject() {
//     const [value, setValue] = useState({
//         name: '',
//         price: null,
//         square: null,
//     })
//     return (
//         <>
//         <LayoutContainer title={'Добавить новый объект'}>
//             <div className='container'>
//                 <A href='/objects'>Назад</A>
//                 <h1>Добавить объект</h1>
//                 <form onSubmit={handleSubmit} className='form'>
//                     <div></div>
//                 </form>
//             </div>
//         </LayoutContainer>
//         </>
//     )
// }

const Index = ({}) => {
	return (
        <ObjectAdd/>
	)
}

export default Index
