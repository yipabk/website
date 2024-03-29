import akr from '../../assets/images/akr.png'
import brainfit from '../../assets/images/brainfit.png'
import cae from '../../assets/images/cae.png'
import dewaweb from '../../assets/images/dewaweb.png'
import hope from '../../assets/images/hope.png'
import kemenristek from '../../assets/images/kemenristek.png'
import kokoSemesta from '../../assets/images/koko-semesta.png'
import partner1 from '../../assets/images/partner-1.png'
import partner2 from '../../assets/images/partner-2.png'
import partner3 from '../../assets/images/partner-3.png'
import peace from '../../assets/images/peace.png'
import shiningStars from '../../assets/images/shining-stars.png'
import shiningStars2 from '../../assets/images/shining-stars-2.png'
import { useLocation } from 'react-router-dom'

interface Props {
	title: string
	subtitle?: string
}

export const Partners = ({ title, subtitle }: Props) => {
	const images = [dewaweb, kemenristek, partner1, hope, peace]
	const images2 = [cae, akr, partner2, shiningStars, brainfit, shiningStars2, partner3, kokoSemesta]
	const { pathname } = useLocation()

	return (
		<div className='flex flex-col items-center'>
			<div className={`${pathname === '/' ? 'font-display' : 'font-montserrat'} text-center text-3xl lg:text-5xl`}>
				{title}
			</div>
			<div className='font-montserrat text-center text-3xl lg:text-5xl font-bold mt-4'>{subtitle}</div>
			<div className='flex flex-col gap-4 mt-8'>
				<div className='flex flex-wrap justify-center items-center gap-6'>
					{images.map((image, index) => (
						<img
							data-aos='zoom-out-down'
							data-aos-once='true'
							data-aos-offset='250'
							data-aos-delay={`${index * 50}`}
							key={image}
							src={image}
						/>
					))}
				</div>
				<div className='flex flex-wrap justify-center items-center gap-6 '>
					{images2.map((image, index) => (
						<img
							data-aos='zoom-out-down'
							data-aos-once='true'
							data-aos-offset='250'
							data-aos-delay={`${(index + images.length) * 50}`}
							key={image}
							src={image}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
