import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Beers from './Beers'
import Breweries from './Breweries'
import Navbar from './navbar'
import SingleBeer from './singleBeer'
import SingleBrewery from './singleBrewery'
import RegisteredBeers from './registeredBeers'

const Root = () => {
  return (
    <HashRouter>
    <div>
      <Navbar />
      <main>
        <h1>Beer Buzz</h1>
        <Route  exact path= "/beers" component={Beers} />
        <Route  exact path= "/breweries" component={Breweries} />
        <Route  exact path= "/beers/:id" component={SingleBeer} />
        <Route  exact path= "/breweries/:id" component={SingleBrewery} />
        <Route  exact path= "/breweries/:id/beers" component={RegisteredBeers} />
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
