'use client'

import { Card } from '@/components/Card/Card'
import { Header } from '@/components/Header/Header'
import { List } from '@/components/List/List'

export default function Home() {
	return (
		<div className='px-4 py-8 sm:p-10.5'>
			<Header className='mb-8 sm:mb-5' />
			<List emptyTitle='Ничего не найдено!' isEmpty={false}>
				{Array(6)
					.fill(null)
					.map((_, idx) => (
						<Card key={idx} />
					))}
			</List>
		</div>
	)
}
