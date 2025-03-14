import type { FC } from 'react'

import { StatusClasses } from './types'
import clsx from 'clsx'
import { STATUSES } from '@/constants/statuses'

const statusClasses: StatusClasses = {
	Ongoing: 'bg-green w-[70px] sm:w-22',
	Finished: 'bg-red w-[70px] sm:w-22',
	Scheduled: 'bg-orange w-28',
}

export const Status: FC<{ variant: Status }> = ({ variant }) => {
	const text = STATUSES.get(variant)
	const currentClass = statusClasses[variant]
	return (
		<div
			className={clsx(
				currentClass,
				'text-white text-xs flex items-center justify-center font-semibold py-1 sm:py-1.5 rounded-sm'
			)}
		>
			{text}
		</div>
	)
}
