import A from '@/components/common/A'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React, { useContext } from 'react'
// import AuthContext from '@/context/AuthContext'
// import LoginForm from '@/components/common/LoginForm/LoginForm'

const Home = () => {
	// const { user, signout } = useContext(AuthContext)
	return (
		<LayoutContainer>
			<div className='container'>
				<h1>home</h1>
				<A href='/objects'>объекты</A> <br />
				{/* {user ? (
					<button className='btn' onClick={() => signout()}>
						Выйти
					</button>
				) : (
					<LoginForm />
				)} */}
			</div>
		</LayoutContainer>
	)
}

export default Home
