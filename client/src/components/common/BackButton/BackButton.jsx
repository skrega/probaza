import A from '../A'

const BackButton = ({href, children}) => {
	return (
		<A
			className='py-1.5 px-5  border rounded border-sky-500 rounded font-medium inline-flex items-center gap-3'
			href={href}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-5 h-5'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
				/>
			</svg>
			{children}
		</A>
	)
}

export default BackButton
