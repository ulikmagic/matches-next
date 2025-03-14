import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import clsx from 'clsx'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['500', '600'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={clsx(inter.variable, 'w-full h-screen bg-black')}>
				{children}
			</body>
		</html>
	)
}
