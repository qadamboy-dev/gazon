import React, { useState } from 'react'
import img1 from '../img/ad54c7c7254aaa80c750954657737cae.webp'
import img2 from '../img/r90.jfif'
import img3 from '../img/calgary-indoor-field-1080x675.jpg'
import img4 from '../img/webpc-passthru.webp'
import '../css/modal.css'

const Bloc2 = () => {
	const [modal, setModal] = useState(false)
	const [input, setInput] = useState(false)
	const [buttom, setButnom] = useState(Math.round(10 * Math.random()) + 1)
	const mas = { firstname: <input />, lastname: 'Reynolds' }
	var a1 = buttom
	const modal1 = () => {
		setModal(e => !e)
	}
	var g
	console.log(a1)
	const reg = () => {
		setInput(e => !e)
	}
	console.log(reg)
	return (
		<div>
			<div class='bloc2' id='reserve'>
				<h1>Available seats</h1>
				<div class='card'>
					<div
						class='sm-card'
						data-aos='fade-up'
						data-aos-duration='500'
						onClick={modal1}
					>
						<img src={img1} alt='' width='400px' />
						<span>Id:12331231</span>
						<span>
							<span>Name:</span> lorem
						</span>
						<span>
							<span>Address:</span> SH.Lorem 12
						</span>
						<span>
							<span>Phone:</span> +998955621213
						</span>
						<span>
							<span>Date:</span> 17:00-18:00
						</span>
						<span>
							<span>Pay:</span> 120 sum
						</span>
					</div>
					<div
						class='sm-card'
						data-aos='fade-up'
						data-aos-duration='1000'
						onClick={modal1}
					>
						<img src={img2} alt='' width='400px' />
						<span>Id:12331231</span>
						<span>
							<span>Name:</span> lorem
						</span>
						<span>
							<span>Address:</span> SH.Lorem 12
						</span>
						<span>
							<span>Phone:</span> +998923476534
						</span>
						<span>
							<span>Date:</span> 17:00-18:00
						</span>
						<span>
							<span>Pay:</span> 120 sum
						</span>
					</div>
					<div
						class='sm-card'
						data-aos='fade-up'
						data-aos-duration='1500'
						onClick={modal1}
					>
						<img src={img3} alt='' width='400px' height='200px' />
						<span>Id:12331231</span>
						<span>
							<span>Name:</span> lorem
						</span>
						<span>
							<span>Address:</span> SH.Lorem 22
						</span>
						<span>
							<span>Phone:</span> +998923456565
						</span>
						<span>
							<span>Date:</span> 12:00-14:00
						</span>
						<span>
							<span>Pay:</span> 120 sum
						</span>
					</div>
					<div
						class='sm-card'
						data-aos='fade-up'
						data-aos-duration='2000'
						onClick={modal1}
					>
						<img src={img4} alt='' width='400px' height='200px' />
						<span>Id:12331231</span>
						<span>
							<span>Name:</span> lorem
						</span>
						<span>
							<span>Address:</span> SH.Lorem 62
						</span>
						<span>
							<span>Phone:</span> +998923454445
						</span>
						<span>
							<span>Date:</span> 12:00-15:00
						</span>
						<span>
							<span>Pay:</span> 170 sum
						</span>
					</div>
				</div>
			</div>
			<div className={modal ? 'modal' : 'modal modall'} onClick={modal1}>
				<div className='sm-modal' onClick={e => e.stopPropagation()}>
					<h1 class='logo'>
						Gozo`n.<span>uz</span>
					</h1>
					<div className='tetx'>
						<span>1 Mарт:</span>
						<div className='sm-tetx'>
							<button className='btnf bt'>8:00-10:00</button>
							<button
								className={'btnb bt btnb' + a1}
								onClick={reg}
							>
								11:00-13:00
							</button>
							<button className='btnr bt'>15:00-17:00</button>
						</div>
					</div>

					<div className='tetx'>
						<span>2 Mарт:</span>
						<div className='sm-tetx'>
							<button className='btnr bt'>8:00-10:00</button>
							<button className={'btnb bt btnb'} onClick={reg}>
								11:00-13:00
							</button>
							<button className='btnf bt'>15:00-17:00</button>
						</div>
					</div>

					<div className='tetx'>
						<span>3 Mарт:</span>
						<div className='sm-tetx'>
							<button className='btnf bt'>8:00-10:00</button>
							<button className='btnr bt'>11:00-13:00</button>
							<button className={'btnb bt btnb'} onClick={reg}>
								15:00-17:00
							</button>
						</div>
					</div>

					<div className='tetx'>
						<span>4 Mарт:</span>
						<div className='sm-tetx'>
							<button className='btnf bt'>8:00-10:00</button>
							<button className={'btnb bt btnb'} onClick={reg}>
								11:00-13:00
							</button>
							<button className='btnr bt'>15:00-17:00</button>
						</div>
					</div>
					<br />
					<br />
					<br />
					<div className={input ? 'regs' : 'dr'}>
						<div className='sm-regs'>
							<label htmlFor=''>Number:</label>
							<input
								type='text'
								className=''
								placeholder='Number'
							/>
						</div>
						<div className='sm-regs'>
							<label htmlFor=''>Date:</label>
							<input
								type='text'
								className=''
								placeholder='Date'
							/>
						</div>
					</div>

					<button class='btn pad' onClick={modal1}>
						<svg
							width='180px'
							height='60px'
							viewBox='0 0 180 60'
							class='border'
						>
							<polyline
								points='179,1 179,59 1,59 1,1 179,1'
								class='bg-line'
							/>
							<polyline
								points='179,1 179,59 1,59 1,1 179,1'
								class='hl-line'
							/>
						</svg>
						<span>Sign up</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Bloc2
