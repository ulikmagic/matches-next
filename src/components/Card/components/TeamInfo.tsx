import type { FC } from 'react'
import type { TeamInfoProps } from '../types'

import clsx from 'clsx'
import { Picture } from '@/components/UI/Picture/Picture'

export const TeamInfo: FC<TeamInfoProps> = ({ title, logo, reverse }) => (
	<div
		className={clsx(
			'flex items-center gap-1.5 sm:gap-3.5',
			reverse && 'flex-row-reverse'
		)}
	>
		<Picture
			src={logo}
			height={40}
			width={40}
			className='w-7 h-7 sm:w-12 sm:h-12'
			alt='logo-team'
		/>
		<p className='text-white font-semibold text-sm sm:text-base whitespace-nowrap'>
			{title}
		</p>
	</div>
)
