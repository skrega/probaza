import React from 'react'
import s from './ObjectList.module.scss'
import ObjectItem from '../ObjectItem/ObjectItem'
import A from '@/components/common/A'

const ObjectList = ({ object }) => {
	return (
		<div className='section'>
			
			<ul role='list' className='divide-y divide-gray-100'>
				{object.map((item, idx) => (
					<ObjectItem item={item} key={idx} />
				))}
			</ul>
		</div>
	)
}

export default ObjectList
