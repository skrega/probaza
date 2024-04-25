import React from "react"
import Home from "@/components/pages/Home/Home"


const Index = ({mainPage}) => {
	return <Home  />
}

export default Index


// export async function getServerSideProps(ctx) {
// 	const qs = require('qs')
// 	const query = qs.stringify({
// 			populate: [
// 				'homeAdvantages.image',
// 				'bannerImage',
// 				'backgroundImage',
// 				'homeServices.image',
// 				'aboutItems.image',
// 				'aboutImage',
// 				'homeCases.image',
// 				'qualityItems.image',
// 				'homeBenefits.icon',
// 				'homeBlogItems.image',
// 			]
// 		}
// 	)

// 	const [mainPage] = await Promise.all([
// 		api({
// 			url: `/main-page?${query}`,
// 			method: 'get'
// 		})
// 	])

// 	return {
// 		props: {
// 			mainPage: mainPage.data.data
// 		}
// 	}
// }