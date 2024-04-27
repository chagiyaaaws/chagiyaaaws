'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Button = ({ onClick }) => {
	return (
		<button onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="104"
				height="104"
				viewBox="0 0 24 24"
				id="heart">
				<path
					fillRule="evenodd"
					stroke="#FFCBCB"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					fill="#FFB1B1"
					d="M6.28001656,3.46389584e-14 C6.91001656,0.0191596721 7.52001656,0.129159672 8.11101656,0.330159672 L8.11101656,0.330159672 L8.17001656,0.330159672 C8.21001656,0.349159672 8.24001656,0.370159672 8.26001656,0.389159672 C8.48101656,0.460159672 8.69001656,0.540159672 8.89001656,0.650159672 L8.89001656,0.650159672 L9.27001656,0.820159672 C9.42001656,0.900159672 9.60001656,1.04915967 9.70001656,1.11015967 C9.80001656,1.16915967 9.91001656,1.23015967 10.0000166,1.29915967 C11.1110166,0.450159672 12.4600166,-0.00984032788 13.8500166,3.46389584e-14 C14.4810166,3.46389584e-14 15.1110166,0.0891596721 15.7100166,0.290159672 C19.4010166,1.49015967 20.7310166,5.54015967 19.6200166,9.08015967 C18.9900166,10.8891597 17.9600166,12.5401597 16.6110166,13.8891597 C14.6800166,15.7591597 12.5610166,17.4191597 10.2800166,18.8491597 L10.2800166,18.8491597 L10.0300166,19.0001597 L9.77001656,18.8391597 C7.48101656,17.4191597 5.35001656,15.7591597 3.40101656,13.8791597 C2.06101656,12.5301597 1.03001656,10.8891597 0.390016562,9.08015967 C-0.739983438,5.54015967 0.590016562,1.49015967 4.32101656,0.269159672 C4.61101656,0.169159672 4.91001656,0.0991596721 5.21001656,0.0601596721 L5.21001656,0.0601596721 L5.33001656,0.0601596721 C5.61101656,0.0191596721 5.89001656,3.46389584e-14 6.17001656,3.46389584e-14 L6.17001656,3.46389584e-14 Z M15.1900166,3.16015967 C14.7800166,3.01915967 14.3300166,3.24015967 14.1800166,3.66015967 C14.0400166,4.08015967 14.2600166,4.54015967 14.6800166,4.68915967 C15.3210166,4.92915967 15.7500166,5.56015967 15.7500166,6.25915967 L15.7500166,6.25915967 L15.7500166,6.29015967 C15.7310166,6.51915967 15.8000166,6.74015967 15.9400166,6.91015967 C16.0800166,7.08015967 16.2900166,7.17915967 16.5100166,7.20015967 C16.9200166,7.18915967 17.2700166,6.86015967 17.3000166,6.43915967 L17.3000166,6.43915967 L17.3000166,6.32015967 C17.3300166,4.91915967 16.4810166,3.65015967 15.1900166,3.16015967 Z"
					transform="translate(2 2.5)"></path>
			</svg>
		</button>
	)
}

const ComponentsFooter = () => {
	const [clickPositions, setClickPositions] = useState([])
	const [showTap, setShowTap] = useState(true)

	const handleClick = () => {
		// Generate 10 random positions
		const newPositions = Array.from({ length: 1 }, () => ({
			x:
				Math.random() * (window.innerWidth - 100) -
				(window.innerWidth - 100) / 2, // Adjust range to keep within bounds
			y:
				Math.random() * (window.innerHeight - 100) -
				(window.innerHeight - 100) / 2, // Adjust range to keep within bounds
		}))

		setClickPositions([...clickPositions, ...newPositions])
		setShowTap(false)
	}

	return (
		<section className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden p-10">
			<AnimatePresence>
				{clickPositions.map((position, index) => (
					<motion.svg
						key={index}
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="0 0 24 24"
						initial={{ opacity: 0, y: position.y, x: position.x, scale: 0.5 }}
						animate={{
							opacity: 1,
							y: position.y,
							x: position.x,
							scale: 1.25,
							transition: { duration: 0.5, type: 'spring', stiffness: 200 },
						}}
						exit={{
							opacity: 0,
							y: position.y,
							x: position.x,
							scale: 0.5,
							transition: { duration: 0.5 },
						}}
						style={{ position: 'absolute' }}>
						<g
							fill="#FFB1B1"
							fillRule="evenodd"
							stroke="#FFCBCB"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1"
							transform="translate(2.5 3)">
							<path d="M9.26100981 17.8537669C7.09039739 16.5178915 5.07111022 14.9456454 3.2392904 13.1651694 1.95143752 11.8829466.9710055 10.3197719.373096631 8.59538613-.702856235 5.25030481.553929046 1.42082647 4.07111951.287520227 5.91961305-.307565201 7.93844933.0325524403 9.49609195 1.20147687L9.49609195 1.20147687C11.0543328.0339759987 13.0724617-.306022468 14.9210644.287520227 18.4382548 1.42082647 19.7040817 5.25030481 18.6281289 8.59538613 18.03022 10.3197719 17.049788 11.8829466 15.7619351 13.1651694 13.9301153 14.9456454 11.9108281 16.5178915 9.7402157 17.8537669L9.50513357 18 9.26100981 17.8537669zM13.2393229 4.0530216C14.3046302 4.39332197 15.061552 5.34972367 15.1561465 6.47500671"></path>
						</g>
					</motion.svg>
				))}
			</AnimatePresence>

			<div className="relative flex flex-col justify-center items-center">
				<div className="px-3 text-center pb-4">
					<p>Semakin hari,</p>
					<p>semakin bertambah rasa cinta aku ke kamu</p>
				</div>
				<Button onClick={handleClick} />
				<p className={`pb-4 ${showTap ? 'opacity-100' : 'opacity-0'}`}>tap</p>
			</div>
		</section>
	)
}

export default ComponentsFooter
