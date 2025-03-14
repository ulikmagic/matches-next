import ButtonUpdate from '@/components/UI/ButtonUpdate/ButtonUpdate'
import { Status } from '@/components/UI/Status/Status'

export default function Home() {
	return (
		<div className='p-10'>
			<ButtonUpdate isLoading />
			<Status variant='live' />
		</div>
	)
}
