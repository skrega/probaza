import React from 'react'
import api from '../../api'
import Object from '@/components/pages/Object/Object'
import { API_URL } from '@/config/index'

const Index = ({ object, pagination, categories }) => {
	return <Object object={object} pagination={pagination} categories={categories} />
}

export default Index

export async function getServerSideProps(ctx) {

	let type = ''
	let productCategory = '';
	let items = 'pagination[limit]=10&'

	if (ctx.query.items !== undefined) {
		items = 'pagination[limit]=' + ctx.query.items + '&'
	}
	if (ctx.query.slug !== undefined && ctx.query.slug !== '') {
		productCategory = 'filters[category][slug][$eq]=' + ctx.query.slug + '&';
	}

	const [ object, categories ] = await Promise.all([
		api({
			// url: `/objects?${type}${items}populate=*`,
			url: `/objects?${items}${productCategory}populate=*`,
			method: 'get'
		}),
		api({ url: '/categories?populate=*', method: 'get' })
	])
	return {
		props: {
			object: object.data.data,
			pagination: object.data.meta,
			categories: categories.data.data
		}
	}
}

