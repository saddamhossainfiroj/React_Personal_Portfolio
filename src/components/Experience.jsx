import React from 'react'
import experience from './Data/experience.json'

const Experience = () => {
	return(
		<>
			<div className="container ex" id="experience">
			<h1>Experience</h1>
			{experience.map((data) => {
				return (
					<>
						<div key={data.id} className="ex-items text-center my-5"
							data-aos="zoom-in"
							data-aos-duration="1000"
							>
							<div className="left">
								<img src={`/assets/${data.imageSrc}`} alt={data.organisation} 
								style={{
									width:"150px",
									height:"100px",
								}}
								/>
							</div>
							<div className="right">
								<h2>{data.role}</h2>
								<h4>
								<span style={{ color: "yellowgreen" }}>{data.startDate} {data.endDate}</span>{' '}
								<span style={{ color: "yellow" }}>{data.location}</span>
								</h4>
								{data.experiences.map((exp, idx) => (
								<h5 key={idx}><span style={{ color: "yellow" }}>{exp}</span></h5>
								))}
							</div>
						</div>
					</>
				)
			})}
			</div>
		</>
	)
}

export default Experience;
