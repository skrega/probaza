// import A from '@/components/common/A'
// import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
// import { useState, useEffect, useContext } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import AuthContext from '@/context/AuthContext'

// const SiginUp = () => {
// 	const [username, setUserName] = useState('')
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')
// 	const [passwordConfirm, setPasswordConfirm] = useState('')

// 	const { signup, error } = useContext(AuthContext)

// 	const handleSubmit = e => {
// 		e.preventDefault()
// 		if (password !== passwordConfirm) {
// 			toast.error('Пароли не совпадают')
// 			return
// 		}
// 		signup({ username, email, password })
// 	}
// 	return (
// 		<LayoutContainer>
// 			<div className='container'>
// 				<ToastContainer />
// 				<h1>Зарегистрироваться</h1>
// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label htmlFor='username'>Email</label> <br />
// 						<input
// 							type='text'
// 							value={username}
// 							id='username'
// 							onChange={e => setUserName(e.target.value)}
// 						/>
// 					</div>
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
// 					<div>
// 						<label htmlFor='passwordConfirm'>Пароль</label> <br />
// 						<input
// 							type='passwordConfirm'
// 							value={passwordConfirm}
// 							id='passwordConfirm'
// 							onChange={e => setPasswordConfirm(e.target.value)}
// 						/>
// 					</div>
// 					<button className='btn btn-primary' type='submit'>
// 						Зарегистрироваться
// 					</button>
// 					<p>
// 						Есть аккаунта? <A href='/auth/siginin'>Войти</A>
// 					</p>
// 				</form>
// 			</div>
// 		</LayoutContainer>
// 	)
// }

// export default SiginUp
