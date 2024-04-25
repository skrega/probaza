import A from '@/components/common/A'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React, { useRef, useState } from 'react'
import s from './ObjectAdd.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import BackButton from '@/components/common/BackButton/BackButton'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import DeleteBtn from '@/components/common/DeleteBtn/DeleteBtn'
import BasicTextarea from '@/components/common/BasicTextarea/BasicTextarea'
import BasicInput from '@/components/common/BasicInput/BasicInput'
import BasicQuantity from '@/components/common/BasicQuantity/BasicQuantity'

const ObjectAdd = () => {
	const [values, setValues] = useState({
		name: '',
		price: '',
		square: '',
		squareLand: '',
		floor: '',
		entireFloor: '',
		priceSQM: '',
		address: '',
		ownerContacts: '',
		description: '',
		categories: '',
		rooms: '',
		cadastralNumber: '',
		images: '',
		slug: ''
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

	const [fileArr, setFileArr] = useState([])
	const fileRef = useRef(null)

	const onFileChange = e => {
		const fileList = e.target.files
		const newFiles = Array.from(fileList)
		setFileArr(prevFileArr => [...prevFileArr, ...newFiles])
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

	const handleInputChange = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const router = useRouter()
	const handleSubmit = async e => {
		e.preventDefault()
		const emptyFieldCheck = Object.values(values).some(element => element === '')

		if (emptyFieldCheck) {
			// toast.error('Пожалуйста заполните все поля')
			alert('Пожалуйста заполните все поля')
		}

		const response = await fetch('http://89.223.122.112/api/objects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify(values)
			body: JSON.stringify({ data: { ...values } })
		})
		if (!response.ok) {
			alert('Ошибка')
		} else {
			const object = await response.json()
			router.push(`/objects/${object.data.attributes.slug}`)
		}
	}

	return (
		<LayoutContainer title={'Добавить новый объект'}>
			<div className='container'>
				<BackButton href={'/objects/'}>Назад</BackButton>
				<div className={'flex items-center place-content-between mb-10 mt-10 ' + s.head}>
					<h1 className='text-2xl font-semibold'>Добавить объект</h1>
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
										label={'Название'}
										id={'name'}
										type={'text'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'price'}
										label={'Цена'}
										id={'name'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'priceSQM'}
										label={'Цена за кв.м'}
										id={'priceSQM'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'square'}
										label={'Площадь'}
										id={'square'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'squareLand'}
										label={'Площадь, сотки'}
										id={'squareLand'}
										type={'number'}
										handleInputChange={handleInputChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'cadastralNumber'}
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
											label={'Этаж'}
											id={'floor'}
											type={'number'}
											handleQtyChange={handleQtyChange}
										/>
										<BasicQuantity
											name={'entireFloor'}
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
										label={'Количество комнат'}
										id={'rooms'}
										type={'number'}
										handleQtyChange={handleQtyChange}
									/>
								</div>
								<div className='mb-4'>
									<BasicInput
										name={'address'}
										label={'Адрес'}
										id={'address'}
										type={'text'}
										handleInputChange={handleInputChange}
									/>
								</div>

								<div className='mb-4'>
									<BasicInput
										name={'slug'}
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
									label={'Описание'}
									id={'description'}
									type={'text'}
									handleInputChange={handleInputChange}
								/>
							</div>
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
						<DeleteBtn>Отмена</DeleteBtn>
						<PrimaryButton type={'submit'}>Сохранить объект</PrimaryButton>
					</div>
				</form>
			</div>
		</LayoutContainer>
	)
}

export default ObjectAdd
