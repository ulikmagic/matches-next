import type { FC } from 'react'
import type { ListProps } from './types'

import { RefreshIcon } from '@/assets/icons'
import { Skeleton } from '@/components/Card/components/Skeleton'

const skeletons = Array(6)
	.fill(null)
	.map((_, idx) => idx)

export const List: FC<ListProps> = ({
	children,
	isEmpty,
	emptyTitle,
	isLoader,
	isLoading,
}) => {
	return isEmpty ? (
		<div className='h-80 flex items-center justify-center font-semibold'>
			<p className='text-xl lg:text-4xl text-grey'>{emptyTitle}</p>
		</div>
	) : isLoading ? (
		<div className='flex flex-col gap-3 min-h-80 items-center justify-center'>
			{isLoader ? (
				<RefreshIcon className='w-15 h-15 animate-spin' />
			) : (
				skeletons.map(item => <Skeleton key={item} />)
			)}
		</div>
	) : (
		<div className='flex flex-col gap-2 lg:gap-3'>{children}</div>
	)
}
