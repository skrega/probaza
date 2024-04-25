import React from 'react'
import NextHead from 'next/head'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

const LayoutContainer = ({ description, title, children }) => {
	return (
		<>
			<NextHead>
				<meta charSet='UTF-8' />
				<title>
					{title
						? title + ' | ProBaza '
						: 'ProBaza '}
				</title>
				<meta
					name={'description'}
					content={
						description
							? description
							: 'ProBaza - увеличиваем прибыль, внедряем системный маркетинг. Стратегический маркетинг, Digital-продвижение, сопровождение и консалтинг.'
					}
				/>
				<meta
					property='og:title'
					content={
						title
							? title + ' | ProBaza '
							: 'ProBaza '
					}
				/>
				<meta
					property='og:description'
					content={
						description
							? description
							: 'ProBaza - увеличиваем прибыль'
					}
				/>
				<meta
					property='twitter:title'
					content={
						title
							? title + ' | ProBaza'
							: 'ProBaza'
					}
				/>
				<meta
					property='twitter:description'
					content={
						description
							? description
							: 'ProBaza - увеличиваем прибыль'
					}
				/>
				<meta property='og:image' content='https://impulse-marketing.ru/images/fav.png' />
				<meta
					property='og:image:secure_url'
					content='https://impulse-marketing.ru/images/fav.png'
				/>
				<meta name='twitter:image' content='https://impulse-marketing.ru/images/fav.png' />
				<meta
					name='viewport'
					content='width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
				/>
				<link rel='icon' href='/images/fav.png' />
			</NextHead>

			<Header />
			<div className='wrapper'>
				<div className={'main'}>{children}</div>
				<Footer />
			</div>
		</>
	)
}

export default LayoutContainer
