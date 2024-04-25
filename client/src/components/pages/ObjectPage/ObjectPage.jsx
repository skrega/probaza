import A from '@/components/common/A'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import formatPrice from 'hooks/formatPrice'
import React, { useEffect, useState } from 'react'
import s from './ObjectPage.module.scss'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import Popup from 'reactjs-popup'
import ObjectContacts from './ObjectContacts/ObjectContacts'
import fixPopup from 'hooks/fixPopup'
import BackButton from '@/components/common/BackButton/BackButton'
import BasicButton from '@/components/common/BasicButton/BasicButton'
// import generatePDF, { usePDF, Options, Margin } from 'react-to-pdf'
import PlaceholderImg from '@/images/placeholder.svg'
import { PDFViewer, pdf } from '@react-pdf/renderer'
import ObjectPdf from '@/components/common/ObjectPdf/ObjectPdf'

const ObjectPage = ({ objectItem }) => {

	const imgPath = process.env.NEXT_PUBLIC_API
	const [showForm, setShowForm] = useState(false)
	const swiperRef = React.useRef(null)
	const swiperParams = {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 15,
		// thumbs: { swiper: thumbsSwiper },
		// modules: [Navigation, Thumbs],
		modules: [Navigation, Pagination],
		pagination: {
			el: '.pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return (
					'<div class="' +
					className +
					'">' +
					'<img src="' +
					imgPath +
					objectItem.images.data[index].attributes.url +
					'" alt="" />' +
					'</div>'
				)
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
		// breakpoints: {
		// 	751: {
		// 		loop: true,
		// 		slidesPerView: 1,
		// 		spaceBetween: 30,
		// 		modules: [Navigation, Thumbs],

		// 	}
		// }
	}

	const [isClient, setIsClient] = useState(false)
	useEffect(() => {
		setIsClient(true)
	}, [])

	const MyDoc = <ObjectPdf objectItem={objectItem} />

	const printDocument = () => {
		if (isClient) {
			pdf(MyDoc)
				.toBlob()
				.then(blob => {
					const url = URL.createObjectURL(blob)
					window.open(url)
				})
		}
	}

	let itemImg = ''
	if (objectItem.images.data == null) {
		itemImg = PlaceholderImg
	}

	return (
		<LayoutContainer>
			<div className='wrapper'>
				<div className='container'>
					<div className={s.test}>
						{/* {isClient ? (
							<PDFViewer>
								<ObjectPdf objectItem={objectItem} />
							</PDFViewer>
						) : null} */}
					</div>
					<div className='flex justify-between mb-10'>
						<BackButton href={'/objects'}>Назад</BackButton>
						<A
							className='flex items-center gap-2 border rounded text-white py-1.5 px-5 bg-slate-500'
							href={`/object/edit/${objectItem.slug}`}
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
									d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
								/>
							</svg>
							Редактировать
						</A>
					</div>

					<div className='block md:grid  md:grid-cols-2 gap-4'>
						<div className={s.content}>
							<h1 className='text-2xl font-semibold mb-4'>{objectItem.name}</h1>
							<div className={s.details}>
								<div className='flex justify-between mb-4'>
									<div className='text-md mb-2 text-slate-500'>Цена</div>
									<div className='text-md font-bold'>{formatPrice(objectItem.price)} ₽</div>
								</div>
								{objectItem.priceSQM && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Цена за кв.м</div>
										<div className='text-md font-bold'>{formatPrice(objectItem.priceSQM)} ₽</div>
									</div>
								)}
								{objectItem.square && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Площадь</div>
										<div className='text-md font-bold'>{objectItem.square} кв.м</div>
									</div>
								)}
								{objectItem.squareLand && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Площадь, сотки</div>
										<div className='text-md font-bold'>{objectItem.squareLand}</div>
									</div>
								)}
								{objectItem.cadastralNumber && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Кадастровый номер</div>
										<div className='text-md font-bold'>{objectItem.cadastralNumber}</div>
									</div>
								)}
								{objectItem.floor && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Этаж</div>
										<div className='text-md font-bold'>
											{objectItem.floor} {objectItem.entireFloor && ' из ' + objectItem.entireFloor}
										</div>
									</div>
								)}
								{objectItem.address && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Адрес</div>
										<div className='text-md font-bold'>{objectItem.address}</div>
									</div>
								)}
								{objectItem.rooms && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Количество комнат</div>
										<div className='text-md font-bold'>{objectItem.rooms}</div>
									</div>
								)}
								{objectItem.site && (
									<div className='flex justify-between mb-4'>
										<div className='text-md mb-2 text-slate-500'>Сайт</div>
										<div className='text-md font-bold'>{objectItem.site}</div>
									</div>
								)}
							</div>
							<div className='flex gap-4 items-center mb-4'>
								{/* {objectItem.ownerContacts.length > 0 && (
									<div className={s.contacts} onClick={() => setShowForm(true)}>
										<PrimaryButton>Показать контакты</PrimaryButton>
									</div>
								)} */}
								<div onClick={printDocument}>
									<BasicButton>Презентация</BasicButton>
								</div>
							</div>
							<div className={s.description__inner}>
								<h2 className='text-2xl font-semibold mb-4'>Описание</h2>
								<div
									className={s.description}
									dangerouslySetInnerHTML={{ __html: objectItem.description }}
								></div>
							</div>
						</div>
						<div className={s.images}>
							{objectItem.images.data !== null ? (
								<>
									<Swiper className={s.slider} {...swiperParams} ref={swiperRef}>
										{objectItem.images.data.map((item, idx) => (
											<SwiperSlide key={idx}>
												<Image
													src={imgPath + item.attributes.url}
													width={item.attributes.width}
													height={item.attributes.height}
													alt={item.attributes.name}
												/>
											</SwiperSlide>
										))}

										<div
											className={cn('swiper-button-prev swiper-btn', s.swiperBtn, s.btn__prev)}
										></div>
										<div
											className={cn('swiper-button-next swiper-btn', s.swiperBtn, s.btn__next)}
										></div>
									</Swiper>

									<div className={s.sliderNavs}>
										<div className={'pagination'}></div>
									</div>
								</>
							) : (
								<Image
									src={PlaceholderImg}
									width={PlaceholderImg.width}
									height={PlaceholderImg.height}
									alt={objectItem.name}
								/>
							)}
						</div>
					</div>
				</div>
				<Popup
					className={'popup-contacts'}
					modal={true}
					open={showForm}
					onOpen={() => {
						fixPopup(true)
						setShowForm(true)
					}}
					onClose={() => {
						setShowForm(false)
						fixPopup(false)
					}}
				>
					<ObjectContacts contacts={objectItem.ownerContacts} close={setShowForm} />
				</Popup>
			</div>
		</LayoutContainer>
	)
}

export default ObjectPage
