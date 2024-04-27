import React from 'react'

const data = [
	{
		image: './image/memories/first-meet.jpeg',
		label: 'first meet',
	},
	{
		image: './image/memories/panyaweuyan-day.jpeg',
		label: 'panyaweuyan day',
	},
	{
		image: './image/memories/manis-senyum.jpeg',
		label: 'manis banget senyumnya',
	},
	{
		image: './image/memories/pasar-malem.jpeg',
		label: 'ke pasar malem',
	},
	{
		image: './image/memories/pantai.jpeg',
		label: 'srupuut es kelapa',
	},
	{
		image: './image/memories/bareng-yummy.jpeg',
		label: 'yummy was born',
	},
	{
		image: './image/memories/moview.jpeg',
		label: 'mau nonton horror',
	},
	{
		image: './image/memories/lovely.jpeg',
		label: 'chagiya kembang desa',
	},
]

const FirstThing = ({ image, label }) => {
	return (
		<div className="pb-4 flex flex-col space-y-3">
			<img
				src={image}
				className="object-cover h-[40vh] w-full rounded-lg"
				alt=""
			/>
			<p className="text-center">{label}</p>
		</div>
	)
}

const ComponentsFirst = () => {
	return (
		<section className="pt-8 pb-6 px-2 flex flex-col items-center bg-red-100">
			<div className="text-center flex flex-col space-y-4 pb-6 ">
				<h1>Our Memories</h1>
				<p>
					Our memories encounter was like a melody in the symphony of life, a
					harmony that forever in our hearts with love.
				</p>
			</div>
			<div className="grid grid-cols-2 grid-rows-3 gap-2">
				{data.map((item, index) => (
					<FirstThing key={index} image={item.image} label={item.label} />
				))}
			</div>
			<div className="w-1/2 border-t border-black"></div>
		</section>
	)
}

export default ComponentsFirst
