import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import '../App.css'

const Carousel = () => {
	const [activeItem, setActiveItem] = useState(0)
	const items = [
		{
			title: 'Bseball',
			description:
				'This article is about the sport. For the ball used in the sport, see Baseball (ball). For other uses, see Baseball (disambiguation).Base ball redirects here. For old time baseball, see Vintage base ball.',
			icon: require('./Media/baseball.svg'),
		},
		{
			title: 'Business',
			description:
				'Business is the practice of making ones living or making money by producing or buying and selling products (such as goods and services)It is also "any activity or enterprise entered into for profit.',
			icon: require('./Media/Business.svg'),
		},
		{
			title: 'Golf',
			description:
				'Golf is a club-and-ball sport in which players use various clubs to hit a ball into a series of holes on a course in as few strokes as possible.',
			icon: require('./Media/Golf.svg'),
		},
	]

	const updateIndex = newIndex => {
		let newIndexAdjusted = newIndex

		if (newIndex < 0) {
			newIndexAdjusted = items.length - 1
		} else if (newIndex >= items.length) {
			newIndexAdjusted = 0
		}

		setActiveItem(newIndexAdjusted)
	}
	return (
		<div className='carousel'>
			<div
				className='inner'
				style={{ transform: `translateX(-${activeItem * 100}%)` }}
			>
				{items.map((item, index) => (
					<CarouselItem key={index} item={item} />
				))}
			</div>
			<div className='carousel-buttons'>
				<button
					onClick={() => updateIndex(activeItem - 1)}
					className='button_arrow'
				>
					<span className='material-symbols-outlined'>arrow_back_ios</span>
				</button>
				<div className='indicators'>
					{items.map((item, index) => (
						<button
							key={index}
							onClick={() => updateIndex(index)}
							className='indicator-buttons'
						>
							<span
								className={`material-symbols-outlined ${
									index === activeItem
										? 'indicator-symbol-active'
										: 'indicator-symbol'
								}`}
							>
								radio_button_checked
							</span>
						</button>
					))}
				</div>
				<button
					onClick={() => updateIndex(activeItem + 1)}
					className='button_arrow'
				>
					<span className='material-symbols-outlined'>arrow_forward_ios</span>
				</button>
			</div>
		</div>
	)
}

export default Carousel
