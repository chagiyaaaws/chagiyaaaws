import React from 'react'

function ComponentsChagiyaw() {
	return (
		<section className="relative">
			<div className="h-screen w-screen flex justify-center items-center bg-red-100 overflow-hidden">
				<img
					loading="lazy"
					className="object-cover h-screen w-screen"
					src="./image/chagiyaaw/image-1.jpeg"
					alt=""
				/>
			</div>

			<div className="absolute bottom-0 p-6 mx-auto flex justify-center w-screen bg-slate-200 rounded-t-3xl">
				<h1 className="font-bold">Hallo sayang ❤️</h1>
			</div>
		</section>
	)
}

export default ComponentsChagiyaw
