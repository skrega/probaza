// import React, { useState, useContext } from 'react'
// import s from './LoginForm.module.scss'
// import BasicInput from '../BasicInput/BasicInput'
// import cn from 'classnames'
// import AuthContext from '@/context/AuthContext'
// import A from '../A'
// import { useForm } from 'react-hook-form'
// import { basicForm } from '../FormResolver/FormResolver'
// import { yupResolver } from '@hookform/resolvers/yup'
// import PrimaryButton from '../PrimaryButton/PrimaryButton'
// import { setToken, unsetToken } from 'libs/auth'
// import { userUser } from 'libs/authContext'
// import { fetcher } from 'libs/api'

// const LoginForm = () => {
// 	// const {
// 	// 	register,
// 	// 	watch,
// 	// 	handleSubmit,
// 	// 	reset,
// 	// 	setValue,
// 	// 	getValues,
// 	// 	setError,
// 	// 	clearErrors,
// 	// 	formState: { errors }
// 	// } = useForm({ resolver: yupResolver(basicForm) })

// 	// const [email, setEmail] = useState('')
// 	// const [password, setPassword] = useState('')
// 	const { signin, error } = useContext(AuthContext)

// 	// const [data, setData] = useState({
// 	// 	identifier: '',
// 	// 	password: ''
// 	// })

// 	const { user, loading } = userUser()

// 	const handleChange = e => {
// 		setData({ ...data, [e.target.name]: e.target.value })
// 	}
// 	const handleSubmit = async e => {
// 		e.preventDefault()
// 		// const responseData = await fetch(`${process.env.NEXT_PUBLIC_API}api/auth/local`, {
// 		// 	method: 'POST',
// 		// 	headers: {
// 		// 		'Content-Type': 'application/json'
// 		// 	},
// 		// 	body: JSON.stringify({
// 		// 		identifier: data.identifier,
// 		// 		password: data.password
// 		// 	})
// 		// })
// 		// console.log(data)
// 		let email = 'test@mail.ru'
// 		let password = 'qwerty1234'
// 		signin({ email, password })
// 		// setToken(data)
// 	}

// 	const logout = () => {
// 		unsetToken()
// 	}


// 	return (
// 		<div className={s.inner}>
// 			<h1 className={cn('title mb-3', s.title)}>Войти</h1>
// 			<form className={s.form} onSubmit={handleSubmit}>
// 				<div className={s.input__box}>
// 					{/* <BasicInput
// 						name='email'
// 						placeholder={'email@email.ru'}
// 						type={'email'}
// 						register={register}
// 						errors={errors}
// 						value={watch().name}
// 						required
// 						onChange={handleChange}
// 					/> */}
// 					<label htmlFor='email'>Email</label> <br />
// 					<input
// 						type='text'
// 						name='identifier'
// 						id='email'
// 						onChange={handleChange}
// 					/>
// 				</div>
// 				<div className={s.input__box}>
// 					<label htmlFor='password'>Пароль</label> <br />
// 					<input
// 						type='password'
// 						name='password'
// 						id='password'
// 						onChange={handleChange}
// 					/>
// 				</div>
// 				<PrimaryButton type='submit'>Войти</PrimaryButton>
// 				{/* <button className='btn btn-primary' type='submit'>
// 					Войти
// 				</button> */}
// 				<p className={s.text}>
// 					Нет аккаунта? <A href='/auth/siginup'>зарегистрируйся</A>
// 				</p>
// 			</form>
// 			{/* <ToastContainer /> */}
// 		</div>
// 	)
// }

// export default LoginForm
