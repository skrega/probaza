import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import ObjectList from './ObjectList/ObjectList'
import A from '@/components/common/A'
import PlusIconCircle from '@/components/icons/PlusIconCircle'
import { useRouter } from 'next/router'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'


const Object = ({ object, categories, pagination }) => {
	const router = useRouter()
	const perPage = 10
	const total = pagination.pagination.total
	const items = router.query.items ? router.query.items : perPage

	return (
		<LayoutContainer>
			<div className='container'>
				<div className='wrapper'>
					<div className='flex justify-between items-center mb-10'>
						<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Объекты</h1>
						<A
							className='flex gap-2 items-center rounded-lg py-2.5 text-sm font-medium focus:outline-none focus:ring-2 p-10 bg-blue-600 text-white'
							href='/object/add'
						>
							<PlusIconCircle />
							Добавить
						</A>
					</div>
					<div className='categories flex gap-2 flex-wrap mb-2'>
						{categories.map((item, idx) => (
							<A
								className='text-sm font-medium py-1 px-4 bg-blue-950 rounded text-white'
								href={'/objects/' + item.attributes.slug}
								key={idx}
							>
								{item.attributes.title}
							</A>
						))}
					</div>
					{object.length > 0 ? (
						<ObjectList object={object} categories={categories} />
					) : (
						<p className='text-center font-medium mt-20'>Нет объектов в категории</p>
					)}
					{total > items && (
						<div
							className='center-block'
							onClick={() =>
								void router.push(
									{
										query: {
											items: Number(items) + perPage
										}
									},
									{},
									{ shallow: false, scroll: false }
								)
							}
						>
							<PrimaryButton>Показать еще</PrimaryButton>
						</div>
					)}
				</div>
			</div>
		</LayoutContainer>
	)
}

export default Object
