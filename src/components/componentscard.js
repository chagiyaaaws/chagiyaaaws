import React from 'react'

const ComponentsCard = () => {
	return (
		<section className="relative">
			<div className="h-screen w-screen flex justify-center items-center overflow-hidden">
				<img
					loading="lazy"
					className="object-cover h-screen w-screen"
					src="./image/chagiyaaw/image-3.jpg"
					alt=""
				/>
			</div>
			<div className="h-[20vh] absolute top-0 p-4 mx-auto flex justify-center w-screen bg-gradient-to-t from-transparent to-slate-200 "></div>
			<div className="absolute top-5 left-0  w-full h-full px-6">
				<p className="text-center">
					Setiap hari bersamamu adalah anugerah yang{' '}
					<span className="font-bold">tak ternilai bagiku.</span>
				</p>
			</div>
			<div className="h-[20vh] absolute bottom-0 p-4 mx-auto flex justify-center w-screen bg-gradient-to-b from-transparent to-red-100 "></div>
		</section>
	)
}
export default ComponentsCard
