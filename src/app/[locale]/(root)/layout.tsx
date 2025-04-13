import Footer from '@/app/[locale]/(root)/_components/Footer'
import Navbar from '@/app/[locale]/(root)/_components/Navbar'
import type { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

function Layout ({children} : ChildProps) {
	return (
		<div>
			<Navbar/>
			{children}
			<Footer/>
		</div>
	)
}
export default Layout
