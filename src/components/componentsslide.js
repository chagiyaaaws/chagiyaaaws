import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const ComponentsSlide = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const images = [
		'./image/collage/collage-1.png',
		'./image/collage/collage-2.jpeg',
		'./image/collage/collage-3.jpeg',
	] // Add your image paths here

	const handleSwipe = (delta) => {
		const newIndex = currentSlide + delta
		setCurrentSlide(() => {
			if (newIndex < 0) {
				return images.length - 1 // Wrap to the last slide when swiping left from the first slide
			} else if (newIndex >= images.length) {
				return 0 // Wrap to the first slide when swiping right from the last slide
			} else {
				return newIndex
			}
		})
	}

	const handlers = useSwipeable({
		onSwipedLeft: () => handleSwipe(1),
		onSwipedRight: () => handleSwipe(-1),
	})

	return (
		<section className="h-screen w-screen relative" {...handlers}>
			<div className="absolute top-0 w-full h-full flex justify-center items-center overflow-hidden">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						className={`h-full w-full object-cover absolute transition-transform duration-500 ${
							index === currentSlide ? 'translate-x-0' : '-translate-x-full'
						}`}
						alt=""
					/>
				))}
			</div>
			<div className="absolute bottom-4 left-0 right-0 flex justify-center">
				{images.map((_, index) => (
					<button
						key={index}
						className={`h-2 w-2 rounded-full mx-1 bg-slate-200 ${
							index === currentSlide ? 'bg-red-300 w-6' : ''
						}`}
						onClick={() => setCurrentSlide(index)}></button>
				))}
			</div>
		</section>
	)
}

export default ComponentsSlide
