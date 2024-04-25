import React from 'react'
import s from './ObjectItem.module.scss'
import A from '@/components/common/A'
import Image from 'next/image'
import PlaceholderImg from '@/images/placeholder.svg'
import formatPrice from 'hooks/formatPrice'

const ObjectItem = ({ item }) => {
	// console.log()
	const imgPath = process.env.NEXT_PUBLIC_API

	let itemImg = ''
	if (item.attributes.images.data !== null) {
		itemImg = imgPath + item.attributes.images.data[0].attributes.url
	} else {
		itemImg = PlaceholderImg
	}
	return (
		<li key={item.email}>
			<A
				href={'/object/' + item.attributes.slug}
				className='flex justify-between gap-x-6 py-5 border-b border-indigo-500'
			>
				<div className='flex min-w-0 gap-x-4 items-center'>
					<Image
						className='h-14 w-14 object-cover flex-none rounded-md bg-gray-50'
						src={itemImg}
						width={500}
						height={500}
						alt={item.attributes.name}
					/>
					<div className='min-w-0 flex-auto'>
						<p className='text-m font-semibold leading-6 text-gray-900'>{item.attributes.name}</p>
						<p className='mt-1 truncate text-sm leading-5 text-gray-500'>
							{formatPrice(item.attributes.price)} ₽
						</p>
					</div>
				</div>
				<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
					<p className='text-sm leading-6 text-gray-900'>Кто создал</p>
					{item.attributes.categories.data[0] && (
						<span className='inline-flex items-center rounded-md bg-blue-50 px-2 mt-1 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'>
							{item.attributes.categories.data[0].attributes.title}
						</span>
					)}
				</div>
			</A>
		</li>
	)
}

export default ObjectItem
