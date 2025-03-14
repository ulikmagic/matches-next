'use client'

import { Card } from '@/components/Card/Card'
import { Header } from '@/components/Header/Header'
import { List } from '@/components/List/List'
import { endpoints, fetchMatches } from '@/utils/api'
import useSWR from 'swr'

export default function Home() {
	const { data, isValidating, error, mutate } = useSWR(
		endpoints.MATCHES,
		fetchMatches
	)

	const matches = Array.isArray(data) ? data : []
	return (
		<div className='px-4 py-8 sm:p-10.5'>
			<Header
				isLoading={isValidating}
				isError={error}
				onUpdate={mutate}
				className='mb-8 sm:mb-5'
			/>
			<List
				emptyTitle='Ничего не найдено!'
				isEmpty={matches.length === 0}
				isLoading={isValidating}
			>
				{matches.map(item => (
					<Card key={item.title} {...item} />
				))}
			</List>
		</div>
	)
}
