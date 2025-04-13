'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

const Prices = () => {
	return (
		<div id={'Prices'} className={'mt-12 mx-[5%]'}>
			<p className={'text-[#373435] text-[42px] font-bold mb-7'}>PRICES</p>
			<Tabs defaultValue="ENGLISH" className="w-full border border-gray-300 p-10">
				<TabsList className={'w-full grid grid-cols-3 max-md:grid-cols-1 md:space-x-10 max-md:space-y-5'}>
					<TabsTrigger value="ENGLISH" className={'h-16 shadow-2xl text-[20px] bg-[#ededed] text-black '}>ENGLISH LANGUAGE</TabsTrigger>
					<TabsTrigger value="IELTS" className={'h-16 shadow-2xl text-[20px] bg-[#ededed] text-black '}>IELTS</TabsTrigger>
					<TabsTrigger value="CORPORATE" className={'h-16 shadow-2xl text-[20px] bg-[#ededed] text-black'}>CORPORATE</TabsTrigger>
				</TabsList>
				<TabsContent value='ENGLISH' className={'flex flex-row mt-10 justify-between '}>
					<div className={'max-lg:basis-full basis-1/3 lg:mr-12 max-lg:justify-center max-md:w-full max-lg:text-center'}>
						<div className={'space-y-3'}>
							<p className={'text-[#373435] text-[18px]'}>Group 13 (±1) students</p>
							<p className={'text-[#373435] text-[18px]'}>Our Students’ App and 1 book (Students’ book)</p>
							<p className={'text-[#373435] text-[18px]'}>Branded Grammar notebook</p>
							<p className={'text-[#373435] text-[18px]'}>Service Academic Support</p>
							<p className={'text-[#373435] text-[18px]'}>Video Arsenal for each lesson</p>
							<p className={'text-[#373435] text-[18px]'}>Speaking Club and Master class</p>
						</div>
						<div className={'mt-10'}>
							<p className={'text-black text-xl font-semibold lg:border-b-[3px] border-[#00ff87] lg:w-fit'}>Price: <span className={'font-bold text-3xl'}>996 000 UZS</span></p>
							<Button className={'w-full mt-7 rounded-none h-16 text-center text-2xl bg-[#00ff87] hover:bg-[#00ff87] text-black font-bold'}>
								<Link href={'#SignUp'}>Sign Up</Link>
							</Button>
						</div>
					</div>
					<div className={'max-lg:hidden basis-2/3'}>
						<Image src={'/home/tab-img-1.webp'} alt={'tab-1'} width={500} height={500} className={'w-full h-[400px]'}/>
					</div>
				</TabsContent>
				
				
				<TabsContent value='IELTS' className={'flex flex-row justify-between '}>
					<div className={'max-lg:basis-full basis-1/3 lg:mr-12 max-lg:justify-center max-md:w-full max-lg:text-center'}>
						<div className={'space-y-3'}>
							<p className={'text-[#373435] text-[18px]'}>Group of 13 (±1) students</p>
							<p className={'text-[#373435] text-[18px]'}>Our Students’ App and 1 book (Students’ book)</p>
							<p className={'text-[#373435] text-[18px]'}>Branded Grammar notebook</p>
							<p className={'text-[#373435] text-[18px]'}>Academic Support Service</p>
							<p className={'text-[#373435] text-[18px]'}>Video Arsenal for every lesson</p>
							<p className={'text-[#373435] text-[18px]'}>Mock IELTS every week</p>
						</div>
						<div className={'mt-10'}>
							<p className={'text-black text-xl font-semibold lg:border-b-[3px] border-[#00ff87] lg:w-fit'}>Price: <span className={'font-bold text-3xl'}>996 000 UZS</span></p>
							<Button className={'w-full mt-7 rounded-none h-16 text-center text-2xl bg-[#00ff87] hover:bg-[#00ff87] text-black font-bold'}>
								<Link href={'#SignUp'}>Sign Up</Link>
							</Button>
						</div>
					</div>
					<div className={'max-lg:hidden basis-2/3'}>
						<Image src={'/home/tab-img-2.webp'} alt={'tab-1'} width={500} height={500} className={'w-full h-[400px]'}/>
					</div>
				</TabsContent>
				
				
				<TabsContent value='CORPORATE' className={'flex flex-row justify-between '}>
					<div className={'max-lg:basis-full basis-1/3 lg:mr-12 max-lg:justify-center max-md:w-full max-lg:text-center'}>
						<div className={'space-y-3'}>
							<p className={'text-[#373435] text-[18px]'}>The number of employees is unlimited</p>
							<p className={'text-[#373435] text-[18px]'}>2 books (Students book and Home book)</p>
							<p className={'text-[#373435] text-[18px]'}>Branded Grammar notebook</p>
							<p className={'text-[#373435] text-[18px]'}>Academic Support Service</p>
							<p className={'text-[#373435] text-[18px]'}>The teacher comes to you with all the devices</p>
						</div>
						<div className={'mt-20'}>
							<p className={'text-black text-xl font-semibold lg:border-b-[3px] border-[#00ff87] lg:w-fit'}>Price: <span className={'font-bold text-3xl'}>996 000 UZS</span></p>
							<Button className={'w-full mt-7 rounded-none h-16 text-center text-2xl bg-[#00ff87] hover:bg-[#00ff87] text-black font-bold'}>
								<Link href={'#SignUp'}>Sign Up</Link>
							</Button>
						</div>
					</div>
					<div className={'max-lg:hidden basis-2/3'}>
						<Image src={'/home/tab-img-3.webp'} alt={'tab-1'} width={500} height={500} className={'w-full h-[400px]'}/>
					</div>
				</TabsContent>
			</Tabs>
		
		</div>
	)
}
export default Prices
