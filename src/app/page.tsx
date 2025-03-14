'use client'

import { Card } from '@/components/Card/Card'
import ButtonUpdate from '@/components/UI/ButtonUpdate/ButtonUpdate'
import { Select } from '@/components/UI/Select/Select'
import { Status } from '@/components/UI/Status/Status'

export default function Home() {
	return (
		<div className='p-4'>
			<ButtonUpdate isLoading />
			<Status variant='live' />
			<Select
				isDisabled
				options={[
					{ label: '12323', value: '123213' },
					{ label: 'how', value: 'how' },
				]}
			/>
			<Card />
		</div>
	)
}
