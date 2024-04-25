import React, { useRef, useState } from 'react'
import A from '@/components/common/A'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import s from './ObjectEdit.module.scss'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import BackButton from '@/components/common/BackButton/BackButton'
import BasicInput from '@/components/common/BasicInput/BasicInput'
import BasicTextarea from '@/components/common/BasicTextarea/BasicTextarea'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/24/outline'
import DeleteBtn from '@/components/common/DeleteBtn/DeleteBtn'
import BasicQuantity from '@/components/common/BasicQuantity/BasicQuantity'
import axios from 'axios'

const ObjectEdit = ({ object, objectItem }) => {
	const [values, setValues] = useState({
		name: objectItem.name,
		price: objectItem.price,
		square: objectItem.square,
		squareLand: objectItem.squareLand,
		floor: objectItem.floor,
		entireFloor: objectItem.entireFloor,
		priceSQM: objectItem.priceSQM,
		address: objectItem.address,
		ownerContacts: objectItem.ownerContacts,
		description: objectItem.description,
		categories: objectItem.categories,
		rooms: objectItem.rooms,
		cadastralNumber: objectItem.cadastralNumber,
		images: objectItem.images,
		slug: objectItem.slug
	})
	const {
		name,
		price,
		square,
		squareLand,
		floor,
		entireFloor,
		priceSQM,
		address,
		ownerContacts,
		description,
		categories,
		rooms,
		cadastralNumber,
		images,
		slug
	} = values

	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	const imgPath = process.env.NEXT_PUBLIC_API

	const router = useRouter()
	const fileRef = useRef(null)

	const [fileArr, setFileArr] = useState(images.data || [])

	const onFileChange = e => {
		const fileList = e.target.files
		const newFiles = Array.from(fileList)
		setFileArr(prevFileArr => [...prevFileArr, ...newFiles])
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const formData = new FormData()

		// Добавляем все изображения в formData
		fileArr.forEach(file => {
			formData.append('files.images', file)
		})

		// Добавляем данные о объекте в formData
		formData.append('data', JSON.stringify({ ...values }))

		try {
			setLoading(true)

			const response = await axios.put(
				`http://89.223.122.112/api/objects/${objectItem.id}`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			if (response.status === 200 || response.status === 201) {
				// Обработка успешного ответа
				const object = response.data
				setSuccess(true)
				router.push(`/object/${object.data.attributes.slug}`)
			} else {
				// Обработка ошибки
				alert('Ошибка при сохранении объекта')
			}
		} catch (error) {
			console.error('Ошибка при сохранении объекта:', error)
			alert('Произошла ошибка при сохранении объекта')
		} finally {
			setLoading(false)
		}
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handleQtyChange = (name, value) => {
		setValues({ ...values, [name]: value })
	}

	const handleRemoveImage = (e, idx) => {
		e.preventDefault()
		const updatedFileArr = [...fileArr]
		updatedFileArr.splice(idx, 1)
		setFileArr(updatedFileArr)
	}

	return (
		<LayoutContainer title={'Добавить новый объект'}>
			<div className='container'>
				<BackButton href={'/object/'+slug}>Назад</BackButton>
				<div className={'flex items-center place-content-between mb-10 mt-10 ' + s.head}>
					<h1 className='text-2xl font-semibold'>Редактировать объект</h1>
					<div onClick={handleSubmit}>
						<PrimaryButton>Сохранить объект</PrimaryButton>
					</div>
				</div>
				<form noValidate onSubmit={handleSubmit} className={s.form}>
					<div className=''>
						<div className='row'>
							<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
								<div className='mb-4'>
									<BasicInput
										name={'name'}
										value={name}
										label={'Название'}
										id={'name'}
										type={'text'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'price'}
										value={price}
										label={'Цена'}
										id={'name'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'priceSQM'}
										value={priceSQM}
										label={'Цена за кв.м'}
										id={'priceSQM'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'square'}
										value={square}
										label={'Площадь'}
										id={'square'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'squareLand'}
										value={squareLand}
										label={'Площадь, сотки'}
										id={'squareLand'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'cadastralNumber'}
										value={cadastralNumber}
										label={'Кадастровый номер'}
										id={'cadastralNumber'}
										type={'text'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<div className='flex row items-center gap-14 '>
										<BasicQuantity
											name={'floor'}
											value={floor}
											label={'Этаж'}
											id={'floor'}
											type={'number'}
											handleQtyChange={handleQtyChange}
										/>
										<BasicQuantity
											name={'entireFloor'}
											value={entireFloor}
											label={'Всего этажей'}
											id={'entireFloor'}
											type={'number'}
											handleQtyChange={handleQtyChange}
										/>
									</div>
								</div>
								<div className='mb-4'>
									<BasicQuantity
										name={'rooms'}
										value={rooms}
										label={'Количество комнат'}
										id={'rooms'}
										type={'number'}
										handleQtyChange={handleQtyChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'address'}
										value={address}
										label={'Адрес'}
										id={'address'}
										type={'text'}
										handleInputChange={handleInputChange}
									/>
								</div>

								<div className='mb-4'>
									<BasicInput
										name={'slug'}
										value={slug}
										label={'slug'}
										id={'slug'}
										type={'text'}
										handleInputChange={handleInputChange}
									/>
								</div>
							</div>
							<div className='mb-10'>
								<BasicTextarea
									name={'description'}
									value={description}
									label={'Описание'}
									id={'description'}
									type={'text'}
									handleInputChange={handleInputChange}
								/>
							</div>
						</div>
						<div
							className={s.images + ' grid grid-cols-2 gap-2 mb-10 md:grid-cols-3 lg:grid-cols-4'}
						>
							{images.data !== null && (
								<>
									{images.data.map((item, idx) => (
										<div className={s.img} key={idx}>
											<button
												className={s.delete__img + ' text-red-600 bg-red-100'}
												onClick={e => handleRemoveImage(e, idx)}
											>
												<TrashIcon />
											</button>
											<Image
												src={imgPath + item.attributes.url}
												width={item.attributes.width}
												height={item.attributes.height}
												alt={item.attributes.name}
											/>
										</div>
									))}
								</>
							)}
						</div>
						<div>
							<h4>Добавить изображения</h4>
							<input type='file' id='media' multiple onChange={onFileChange} ref={fileRef} />
							<div className='flex pt-4 flex-wrap'>
								{/* {fileArr.map((file, idx) => {
									if (file instanceof Blob) {
										return (
											<span className='flex uk-border-rounded flex-wrap' key={idx}>
												<img
													src={URL.createObjectURL(file)}
													alt='preview'
													className='w-[150px] h-[150px]'
												/>
											</span>
										)
									}
								})} */}
							</div>
							{fileRef.current === null ? null : (
								<a
									href='#'
									id='remove'
									className='btn fileupload-exists'
									onClick={e => {
										e.preventDefault()
										document.getElementById('media').value = null
										fileRef.current = null
										setUploadFileArr([])
									}}
								>
									Remove
								</a>
							)}
						</div>
					</div>
					<div>
						<div></div>
					</div>
					<div className={s.btn__submit + ' grid grid-cols-2 gap-2'}>
						<DeleteBtn>Удалить объект</DeleteBtn>
						<PrimaryButton type={'submit'}>Сохранить объект</PrimaryButton>
					</div>
				</form>
			</div>
		</LayoutContainer>
	)
}

export default ObjectEdit
