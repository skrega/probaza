import Cancel from '@/components/icons/Cancel'
import s from './ObjectContacts.module.scss'
const ObjectContacts = ({ contacts, close }) => {
	console.log(contacts)
	return (
		<div className={s.inner}>
			<h4 className='text-2xl font-semibold mb-4'>Контакты</h4>
			<div className={s.rows}>
				{contacts.map((item, idx) => (
					<div className={s.row} key={idx}>
						<div className={s.name + ' mb-2'}>{item.fullName}</div>
						<a className={s.link + ' text-lg'} href={'tel:' + item.phone}>
							{item.phone}
						</a>
					</div>
				))}
			</div>
			<div className='close' onClick={() => close(false)}>
				<Cancel />
			</div>
		</div>
	)
}
export default ObjectContacts
