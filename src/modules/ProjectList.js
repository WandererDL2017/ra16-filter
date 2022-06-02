function ProjectList({projects}) {
  return (
    <div className="projects">
      {projects.map(project => <img src={project.img} className='projects__img' key={project} alt={project.category}></img>)}
    </div>
  )
}

export default ProjectList;