import React from 'react'
import project from './Data/projects.json'

const Projects = () => {
  return (
    <>
		<div className="container my-5" id="projects">
			<h1>Projects</h1>
			<div className="row d-flex justify-content-center align-content-center">
			{project.map((data) => {
				return(
					<>
					<div key={data.key} className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3">
						<div className="card bg-dark text-light text-center" 
						style={{width: "18rem",
							border:"1px solid yellow",
							borderRadius:"10px",
							boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
						}}
						data-aos="flip-right"
						data-aos-duration="1000"
						>
							<div className="img d-flex justify-content-center align-content-center p-3">
							<img className="card-img-top" src={`${data.imageSrc}`} alt={data.title} 
							style={{
								width: "250px",
								height: "200px",
								border: "2px solid yellow",
								borderRadius: "10px",
							}}
							/>
							</div>
							<div className="card-body">
								<h5 className="card-title">{data.title}</h5>
								<p className="card-text">{data.description}</p>
								<a href={data.demo} className="btn btn-primary">Demo</a>
								<a href={data.source} className="btn btn-warning m-3">Code</a>
							</div>
						</div>
					</div>
					</>
				)})}
			</div>
		</div>
    </>
  )
}

export default Projects;
