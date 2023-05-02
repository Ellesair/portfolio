import React from 'react'
import projectList from '../data/projectList.json'
import ProjectCard from '../components/projectCard'

function projects() {
  return (
    <>
    <h1>My Projects</h1>
    <div>{projectList.map(item => (
        <ProjectCard key={item.id} data={item} />
    ))}</div>
    </>
  )
}

export default projects