// import A from '@/components/common/A'
// import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
// import { useState, useEffect, useContext } from 'react'
// import AuthContext from '@/context/AuthContext'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const SiginIn = () => {
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')
// 	const { signin, error } = useContext(AuthContext)

// 	// useEffect(() => error && toast.error(error))
// 	// useEffect(() => { _helperFunction() .then((res) => {() => error && toast.error(error) }) }, []);

// 	const handleSubmit = e => {
// 		e.preventDefault()
// 		signin({ email, password })
// 	}
// 	return (
// 		<LayoutContainer>
// 			<div className='container'>
// 				<h1>Войти</h1>
// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label htmlFor='email'>Email</label> <br />
// 						<input type='text' value={email} id='email' onChange={e => setEmail(e.target.value)} />
// 					</div>
// 					<div>
// 						<label htmlFor='password'>Пароль</label> <br />
// 						<input
// 							type='password'
// 							value={password}
// 							id='password'
// 							onChange={e => setPassword(e.target.value)}
// 						/>
// 					</div>
// 					{/* <button className='btn btn-primary' type='submit'>
// 						Войти
// 					</button> */}
// 					{/* <Button variant='contained'>Contained</Button> */}
// 					<p>
// 						Нет аккаунта? <A href='/auth/siginup'>зарегистрируйся</A>
// 					</p>
// 				</form>
// 				<ToastContainer />
// 			</div>
// 		</LayoutContainer>
// 	)
// }

// export default SiginIn
