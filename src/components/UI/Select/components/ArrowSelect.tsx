import type { FC } from 'react'
import type { DropdownIndicatorProps, GroupBase } from 'react-select'
import type { OptionType } from '../types'

import { ArrowSelectIcon } from '@/assets/icons'
import clsx from 'clsx'

export const ArrowSelect: FC<
	DropdownIndicatorProps<OptionType, false, GroupBase<OptionType>>
> = ({ selectProps, isDisabled }) => (
	<div className='w-5 h-5 flex items-center justify-center'>
		<ArrowSelectIcon
			className={clsx(
				isDisabled && 'text-grey-100',
				'w-3 duration-400 cursor-pointer group-hover:text-white text-grey',
				selectProps.menuIsOpen && 'rotate-180'
			)}
		/>
	</div>
)
