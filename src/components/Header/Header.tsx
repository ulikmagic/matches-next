import type { FC } from 'react'
import type { HeaderProps } from './types'

import clsx from 'clsx'
import LogoImage from '@/assets/logo.png'
import Image from 'next/image'
import ButtonUpdate from '@/components/UI/ButtonUpdate/ButtonUpdate'
import { ErrorBox } from '@/components/UI/ErrorBox/ErrorBox'

export const Header: FC<HeaderProps> = ({
	className,
	onUpdate,
	isError,
	isLoading,
}) => {
	return (
		<header
			className={clsx(
				className,
				'flex justify-between xl:flex-row items-center gap-2.5 flex-col'
			)}
		>
			<div className='flex flex-col w-full gap-3.5 xl:gap-6 xl:flex-row items-center'>
				<Image
					src={LogoImage}
					width={225}
					height={28}
					className='w-56 h-6	xl:w-64 xl:h-7'
					alt='logo'
				/>
				{/* на будущее */}
				{/* <Select placeholder="Все статусы" /> */}
			</div>
			<div className='w-full flex flex-col gap-3 xl:flex-row-reverse xl:w-auto'>
				<ButtonUpdate
					className='!w-full xl:!w-[204px]'
					isLoading={isLoading}
					onClick={onUpdate}
				/>
				<ErrorBox
					title='Ошибка: не удалось загрузить информацию'
					isOpen={Boolean(isError)}
				/>
			</div>
		</header>
	)
}
