import React from 'react'
import api from '../../api'
import ObjectPage from '@/components/pages/ObjectPage/ObjectPage'


const Index = ({ object, objectItem }) => {
	return ( <ObjectPage object={object} objectItem={objectItem}/> )
}

export default Index

export async function getServerSideProps(ctx) {
	const [ object, objectItem] = await Promise.all([
		
		api({
			url: '/objects?populate=*',
			method: 'get'
		}),
		api({
			url: `/object/${ctx.query.slug}?populate=*`,
			method: 'get'
		})
	])

	const objectId = objectItem.data.data.id; 
	return {
		props: {
			object: object.data.data,
			// objectItem: objectItem.data.data.attributes,
			objectItem: { ...objectItem.data.data.attributes, id: objectId },

		}
	}
}
