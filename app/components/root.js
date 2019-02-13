import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Students from './Students'
import Campuses from './Campuses'
import Navbar from './navbar'
import SingleStudent from './singleStudent'
import SingleCampus from './singleCampus'
import RegisteredStudents from './registeredStudents'
const Root = () => {
  return (
    <HashRouter>
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <p>This seems like a nice place to get started with some Routes!</p>
        <Route  exact path= "/students" component={Students} />
        <Route  exact path= "/campuses" component={Campuses} />
        <Route  exact path= "/students/:id" component={SingleStudent} />
        <Route  exact path= "/campuses/:id" component={SingleCampus} />
        <Route  exact path = "/campuses/:id/students" component={RegisteredStudents}/>
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
