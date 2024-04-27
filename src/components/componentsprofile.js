import React from 'react'

const ImageProfile = ({ name, photo }) => {
	return (
		<div className="px-4">
			<img
				src={photo}
				className="rounded-lg h-[30vh] w-full object-cover"
				loading="lazy"
				alt=""
			/>
			<h2 className="pt-4 flex justify-center">{name}</h2>
		</div>
	)
}

const ComponentsProfile = () => {
	return (
		<section className="w-screen py-8">
			<div className="pb-6 text-center space-y-4 px-4">
				<p>
					dengan segala rasa yang mengalir dalam diriku, izinkan aku untuk
					mempersembahkan sebuah lukisan indah tentang cinta kita
				</p>
			</div>

			<div className="grid grid-cols-2">
				<ImageProfile name={'Hubby'} photo={'./image/photo/hubby.png'} />
				<ImageProfile name={'Chagiya'} photo={'./image/photo/chagiya.png'} />
			</div>
		</section>
	)
}

export default ComponentsProfile
