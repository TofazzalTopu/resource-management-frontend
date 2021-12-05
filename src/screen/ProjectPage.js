import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/Header'
import NavBar from '../components/NavBar'

const ProjectPage = () => {

     const [res, setRes] = useState([
          {id: 1, name: 'Project 1',},
          {id: 2, name: 'Project 2',},
          {id: 3, name: 'Project 3',},
          {id: 4, name: 'Project 4',},
     ])

     return (
          <>
          <Header/>
          <NavBar/>
          <div className="resource-page flex aic jc">
               <div className="res-block flex col">
                    <div className="head flex">
                         <div className="row flex font b6">Project</div>
                         <div className="row flex font b6">Actions</div>
                    </div>
                    <div className="tlb-head flex aic jc">
                         <div className="row flex b6">Project ID</div>
                         <div className="row flex b6">Project Name</div>
                         <div className="row flex">
                              <button className="btn-add cleanbtn b6 button">Add</button>
                         </div>
                    </div>
                    {
                         res.map((item, i) =>(
                              <div className="tlb-head tbl-list flex aic jc">
                                   <div className="row flex">{item.id}</div>
                                   <div className="row flex">{item.name}</div>
                                   <div className="row flex col">
                                        <Link to={'./update'}><button className="btn-add cleanbtn button">Update</button></Link>
                                        <button className="btn-add cleanbtn button">Delete</button>
                                   </div>
                              </div>
                         ))
                    }
                    
               </div>
          </div>
          </>
     )
}

export default ProjectPage
