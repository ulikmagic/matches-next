import type { FC } from 'react'
import type { ButtonUpdateProps } from './types'

import clsx from 'clsx'
import { RefreshIcon } from '@/assets/icons'

const ButtonUpdate: FC<ButtonUpdateProps> = ({
	children,
	isLoading,
	disabled,
	...props
}) => {
	const defaultClassName =
		'flex py-3.5 bg-red px-10 gap-x-2.5 items-center justify-center rounded-sm cursor-pointer font-semibold text-lg w-full sm:w-auto hover:bg-red-pressed'
	const disabledClassName = 'bg-red-disabled text-disabled pointer-events-none'
	return (
		<button
			{...props}
			className={clsx(
				props.className,
				(isLoading || disabled) && disabledClassName,
				defaultClassName
			)}
		>
			{children || 'Обновить'}{' '}
			<RefreshIcon
				className={clsx(
					'w-6.5 h-6.5',
					(isLoading || disabled) && 'opacity-50',
					isLoading && 'animate-spin'
				)}
			/>
		</button>
	)
}

export default ButtonUpdate
