import type { PictureProps } from './types'
import type { FC } from 'react'

import Image from 'next/image'
import { useState } from 'react'
import EmptyImage from '@/assets/no-image.png'
import clsx from 'clsx'

export const Picture: FC<PictureProps> = ({ src, ...props }) => {
	const [isError, setIsError] = useState(!src)
	return isError ? (
		<Image
			src={EmptyImage}
			{...props}
			className={clsx(props.className, 'rounded-md')}
		/>
	) : (
		<Image src={src as string} onError={() => setIsError(true)} {...props} />
	)
}
