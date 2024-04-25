import React from 'react'
import A from '../A'
import cn from 'classnames'
import s from './PrimaryButton.module.scss'
const PrimaryButton = ({ children, click, href = '', type = 'button' }) => {

	return href ? (
		<A className='btn-primary' href={href}>
			{children}
		</A>
	) : (
		<button className={cn('btn',s.btn)} type={type}>
			{children}
		</button>
	)
}

export default PrimaryButton
