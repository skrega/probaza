import A from '../A'
import s from './BasicButton.module.scss'

const BasicButton = ({ children, click, href = '', type = 'button' }) => {
	return href ? (
		<A className={'btn ' + s.btn} href={href}>
			{children}
		</A>
	) : (
		<button className={'btn ' + s.btn} type={type}>
			{children}
		</button>
	)
}

export default BasicButton
