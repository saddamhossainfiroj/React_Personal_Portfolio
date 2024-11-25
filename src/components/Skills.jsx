import React from 'react'
import skills from './Data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skill" id="skills">
			<h1>Skills</h1>
			<div className="items">
			{skills.map((data) => {
				return (
					<>
						<div key={data.id} className="item text-center"
							data-aos="flip-left"
							data-aos-duration="1000"
							>
							<img src={`/assets/${data.imageSrc}`} alt={data.title} />
							<h3>{data.title}</h3>
						</div>
					</>
				)
			})}
			</div> 
		</div>
    </>
  )
}

export default Skills
