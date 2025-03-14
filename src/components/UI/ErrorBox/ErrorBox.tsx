import type { FC } from 'react'
import type { ErrorBoxProps } from './types'

import { ErrorIcon } from '@/assets/icons'
import clsx from 'clsx'

export const ErrorBox: FC<ErrorBoxProps> = ({ title, isOpen }) => {
	return (
		<div
			className={clsx(
				'bg-black-200 overflow-hidden duration-300 rounded-sm p-3.5 xl:px-6 flex justify-center items-center gap-1.5 xl:gap-2.5',
				isOpen ? 'h-14' : 'h-0 !py-0'
			)}
		>
			<div className='w-7 p-1 h-7'>
				<ErrorIcon />
			</div>
			<p className='whitespace-nowrap font-medium text-sm md:text-lg'>
				{title}
			</p>
		</div>
	)
}
