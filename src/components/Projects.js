import React from 'react';
import { Link } from 'react-router-dom';

//Exportamos todos los proyectos para poder acceder a ellos en projectDetails.js componente.
export  const myProjects = [
    {
        id: "1a",
        name: "The Frogger Clone",
        year: 2017,
        technologies: "JavaScript, jQuery",
        description: "The first project game clone."
    },
    {
        id: "2b",
        name: "iTravel",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to share their experiences about travel destinations."
    },
    {
        id: "3c",
        name: "The Plan",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to plan your next activity with your friends or business partners."
    }
  ]

export const projects = () => {
 
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map((eachProject, index) => {
        return (
          <div key={eachProject.id}>
            <h3>
            {/* Aquí es donde estamos creado un link en el nombre de cada proyecto recorrido ,
             cuando clicleamos en el link se pasa el id como props a projectDetails.js component porque asi esta cnfigurado en la ruta de app.js */}
            <Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link>
            </h3>
            <h4>{eachProject.technologies}</h4>
            <hr />
          </div>
        )
      })}
  </div>
  )
}