import type { FC } from 'react'
import type { SelectProps } from './types'

import SelectLib from 'react-select'
import { ArrowSelect } from './components/ArrowSelect'
import { Option } from './components/Option'
import clsx from 'clsx'

export const Select: FC<SelectProps> = ({ ...props }) => {
	return (
		<SelectLib
			{...props}
			components={{
				Option,
				DropdownIndicator: ArrowSelect,
				...props.components,
			}}
			classNames={{
				indicatorSeparator: () => 'hidden',
				valueContainer: () => '!p-0',
				input: () => '!p-0 !m-0',
				placeholder: () =>
					clsx(
						'!text-grey group-hover:!text-white',
						props.isDisabled && 'text-red'
					),
				menu: () => '!rounded-md !bg-black-200',
				menuList: () => '!py-1.5',
				singleValue: () =>
					clsx(
						'font-medium text-base group-hover:!text-white !text-grey',
						props.isDisabled && '!text-grey-100'
					),
				control: () =>
					clsx(
						'!bg-black-100 group h-14 active:!bg-black-100 active:!border-black-300 hover:!bg-black-200 !shadow-none !border-black-100 flex gap-3 p-4 pr-5 !cursor-pointer',
						props.isDisabled && 'pointer-events-none !bg-black-200'
					),
				...props.classNames,
			}}
		/>
	)
}
