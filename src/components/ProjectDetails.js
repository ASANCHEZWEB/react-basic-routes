import React from 'react';
//Importamos los proyectos del componente project para poder buscar los detalles del producto por id en este componente
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';


const projectDetails = (props) => {
  //Este props lo que recibe es la id de la ruta para hacer un find (id) en los proyectos importados arriba.
    console.log(props)




  const getProject = (id) => {
    
    const theProject = (oneProject) => {
        //aqui devolvemos el id a buscar 
        return oneProject.id === id
    }
    //aqui devolvemos el proyecto encontrado
    return myProjects.find(theProject)
  };
  


  const { params } = props.match;
  //primero se ejecuta esto para obtener el objeto de proyecto
  const foundProject = getProject(params.id, 10);
   

  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;