import type { FC } from 'react'

import { Status } from '@/components/UI/Status/Status'
import { TeamInfo } from './components/TeamInfo'
import TeamLogoImage from '@/assets/icons/team-logo.svg?raw'

export const Card: FC<Match> = ({
	status,
	homeTeam,
	awayTeam,
	homeScore,
	awayScore,
}) => {
	return (
		<div className='bg-black-100 rounded-sm min-h-card p-2 sm:p-4 w-full flex items-center justify-between'>
			<TeamInfo title={homeTeam.name} logo={TeamLogoImage} />
			<div className='flex flex-col items-center gap-1'>
				<p className='font-semibold text-sm sm:text-xl text-white'>
					{homeScore} : {awayScore}
				</p>
				<Status variant={status} />
			</div>
			<TeamInfo title={awayTeam.name} logo={TeamLogoImage} reverse />
		</div>
	)
}
