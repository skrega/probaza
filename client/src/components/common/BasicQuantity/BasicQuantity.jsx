import cn from 'classnames'
import s from './BasicQuantity.module.scss'
import { useState } from 'react'

const BasicQuantity = ({
	name,
	value,
	label,
	placeholder,
	id,
	type,
	errors,
	handleQtyChange
}) => {
	const [lengthValue, setLengthValue] = useState(0)
    const [valueQty, setValueQty] = useState(value)
	const handleQuantityChange = (change) => {
		const updatedValue = valueQty + change
		if (updatedValue >= 1) {
            setValueQty(updatedValue)
            handleQtyChange(name, updatedValue) 
		}
	}
	return (
		<div className={s.input__inner}>
			{/* {errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>} */}
			<label className={cn('font-semibold mb-2 block')} htmlFor={name}>
				{label ? label : placeholder}
			</label>

			<div className={s.box}>
				<input
					id={id ? id : name}
					className={cn(
						s.input,
						lengthValue > 0 ? s.focus : '',

						// errors[name] ? s.error : ''
					)}
					placeholder={placeholder}
					value={valueQty}
					name={name}
					type={type}
                    min={1}
					onChange={()=> handleQtyChange(name,valueQty )}
				/>
				<div className={s.buttons}>
					<button className={s.btn} type='button' onClick={() => handleQuantityChange(1)}>
						+
					</button>
					<button className={s.btn} type='button' onClick={() => handleQuantityChange(-1)}>
						-
					</button>
				</div>
			</div>
		</div>
	)
}

export default BasicQuantity
