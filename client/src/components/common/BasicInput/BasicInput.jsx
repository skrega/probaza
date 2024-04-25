import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import s from './BasicInput.module.scss'

const BasicInput = ({
	style,
	name,
	value,
	label,
	placeholder,
	id,
	type,
	handleInputChange,
}) => {
	const [lengthValue, setLengthValue] = useState(0)

	return (
		<div className={s.input__inner}>
			{/* {errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>} */}
			<input
				id={id ? id : name}
				className={cn(
					s.input,
					style ? s.border : '',
					s.input,
					lengthValue > 0 ? s.focus : '',
					// errors[name] ? s.error : ''
				)}
				placeholder={''}
				value={value}
				name={name}
				type={type}
				min={1}
				onChange={handleInputChange}
				// {...register(name, { required })}
			/>
			<label
				className={cn(
					style ? s.labelTransparent : s.label,
					s.label,
					'font-semibold'
				)}
				htmlFor={name}
			>
				{label ? label : placeholder}
			</label>
		</div>
	)
}

export default BasicInput
