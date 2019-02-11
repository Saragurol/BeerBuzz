import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Students from './Students'
import Campuses from './Campuses'
import Navbar from './navbar'
const Root = () => {
  return (
    <HashRouter>
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <p>This seems like a nice place to get started with some Routes!</p>
        <Route path= "/students" component={Students} />
        <Route path= "/campuses" component={Campuses} />
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
