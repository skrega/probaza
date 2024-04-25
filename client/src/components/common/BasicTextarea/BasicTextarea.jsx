import { useState } from 'react'
import s from './BasicTextarea.module.scss'
import cn from 'classnames'

const BasicTextarea = ({
	style,
	name,
	value,
	label,
	placeholder,
	id,
	type,
	onChange,
	errors,
	handleInputChange
}) => {
	const [lengthValue, setLengthValue] = useState(0)

	return (
		<div className={s.input__inner}>
			{/* {errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>} */}
			<label
				className={cn(style ? s.labelTransparent : s.label, 'font-semibold mb-2 inline-block')}
				htmlFor={name}
			>
				{label ? label : placeholder}
			</label>
			<textarea
				id={id ? id : name}
				className={cn(
					s.input,
                    s.textarea,
					style ? s.border : '',
					lengthValue > 0 ? s.focus : '',
					// errors[name] ? s.error : ''
				)}
				placeholder={placeholder}
				value={value}
				name={name}
				type={type}
				onChange={handleInputChange}
			></textarea>
		</div>
	)
}

export default BasicTextarea
