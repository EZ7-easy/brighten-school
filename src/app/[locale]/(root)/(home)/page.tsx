import About from '@/app/[locale]/(root)/(home)/_components/About'
import Banner from '@/app/[locale]/(root)/(home)/_components/banner'
import Contacts from '@/app/[locale]/(root)/(home)/_components/Contacts'
import Gallery from '@/app/[locale]/(root)/(home)/_components/Gallery'
import Map from '@/app/[locale]/(root)/(home)/_components/Map'
// import Prices from '@/app/[locale]/(root)/(home)/_components/Prices'
import SignUp from '@/app/[locale]/(root)/(home)/_components/SignUp'
import Team from '@/app/[locale]/(root)/(home)/_components/Team'

const Page = () => {
	
	return (
		<>
			<Banner/>
			<About/>
			<Team/>
			{/* <Prices/> */}
			<SignUp/>
			<Map/>
			<Gallery/>
			<Contacts/>
		</>
	)
}
export default Page
