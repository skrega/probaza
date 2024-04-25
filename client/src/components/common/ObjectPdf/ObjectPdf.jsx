import React from 'react'
import { Page, Text, View, Document, Image, StyleSheet, Font } from '@react-pdf/renderer'
import logo from '../../../images/logo.png'
import formatPrice from 'hooks/formatPrice'
import PlaceholderImg from '@/images/placeholder.svg'

// Create styles
Font.register({
	family: 'Roboto',
	fonts: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
			fontWeight: 400
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
			fontWeight: 500
		}
	]
})
const styles = StyleSheet.create({
	page: {
		fontFamily: 'Roboto',
		fontWeight: 400,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	body: {
		paddingTop: 75,
		paddingBottom: 65,
		paddingHorizontal: 35
	},
	logo: {
		width: 100
	},
	image: {
		width: 200,
		margin: 5
	},
	section: {
		margin: 10,
		padding: 10
	},
	title: {
		fontSize: 22,
		marginBottom: 10,
		marginTop: -50
	},
	text: {
		fontSize: 12,
		marginBottom: 5
	},
	textSmall: {
		fontSize: 10,
		marginBottom: 2
	},
	textBold: {
		fontWeight: 500
	},
	description: {
		fontSize: 12
	},
	image: {
		margin: 5,
		width: 285,
		objectFit: 'fill',
		objectPositionX: 'center',
		objectPositionY: 'center'
	}
})
// Create Document Component
const ObjectPdf = ({ objectItem }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	const removeTagsAndNBSP = htmlString => {
		// Удаляем теги <p>, <b> и <br>
		let cleanString = htmlString
		 .replace(/<p>/g, '')
		 .replace(/<\/p>/g, '\n')
		 .replace(/<b>/g, '')
		 .replace(/<o:p>/g, '')
		 .replace(/<\/b>/g, '')
		 .replace(/<\/o:p>/g, '')
		 .replace(/<br\s*\/?>/gi, '\n\n')
		// Удаляем символьный код неразрывного пробела
		cleanString = cleanString.replace(/&nbsp;/g, ' ')
		return cleanString
	  }
	  const cleanedDescription = removeTagsAndNBSP(objectItem.description)
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<div>
					<View style={{ paddingHorizontal: 35 }}>
						<div
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								alignItems: 'flex-end',
								borderBottom: 1,
								paddingBottom: 5
							}}
						>
							<div>
								<Text style={styles.textSmall}>Риелтор: </Text>
								<Text style={styles.textSmall}>Телефон: </Text>
								<Text style={styles.textSmall}>Эл. почта: </Text>
							</div>
							<Image style={styles.logo} alt={'logo'} src={logo.src} />
						</div>
					</View>
					<View style={styles.body}>
						<Text style={styles.title}>{objectItem.name}</Text>
						<Text style={styles.text}>
							<Text style={styles.textBold}>Цена: {formatPrice(objectItem.price)} руб.</Text>
						</Text>
						{objectItem.priceSQM && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Цена за кв.м: </Text>
								{formatPrice(objectItem.priceSQM)} руб.
							</Text>
						)}
						{objectItem.square && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Площадь:</Text> {objectItem.square} кв.м
							</Text>
						)}
						{objectItem.squareLand && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Площадь, сотки:</Text> {objectItem.squareLand}
							</Text>
						)}
						{objectItem.cadastralNumber && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Кадастровый номер:</Text> {objectItem.cadastralNumber}
							</Text>
						)}
						{objectItem.floor && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Этаж:</Text> {objectItem.floor}
								{objectItem.entireFloor && ' из ' + objectItem.entireFloor}
							</Text>
						)}

						{objectItem.address && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Адрес:</Text> {objectItem.address}
							</Text>
						)}
						{objectItem.rooms && (
							<Text style={styles.text}>
								<Text style={styles.textBold}>Количество комнат:</Text> {objectItem.rooms}
							</Text>
						)}
						<Text style={{ marginTop: 20, marginBottom: 10 }}>Описание</Text>
						{objectItem.description && <Text style={styles.description}>{cleanedDescription}</Text>}
					</View>
				</div>
				<View>
					<div
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 20,
							borderTop: 1,
							paddingHorizontal: 30,
							paddingBottom: 0
						}}
					>
						<div>
							<Text style={styles.textSmall}>Риелтор: </Text>
							<Text style={styles.textSmall}>Телефон: </Text>
							<Text style={styles.textSmall}>Эл. почта: </Text>
						</div>
						<Image style={styles.logo} alt="logo bottom" src={logo.src} />
					</div>
				</View>
			</Page>
			{objectItem.images.data !== null && (
				<Page>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						{objectItem.images.data.map((item, idx) => (
							<Image src={imgPath + item.attributes.url} key={idx} alt={'img'} style={styles.image} />
						))}
					</View>
				</Page>
			)}
		</Document>
	)
}

export default ObjectPdf
