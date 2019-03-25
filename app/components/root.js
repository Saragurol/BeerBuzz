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
        <Route  exact path= "/" component={Breweries} />
        <Route  exact path= "/breweries" component={Breweries} />
        <Route  path= "/breweries/:id" component={SingleBrewery} />
        <Route  exact path= "/breweries/:id/beers" component={RegisteredBeers} />
        <Route  exact path= "/beers" component={Beers} />
        <Route  path= "/beers/:id" component={SingleBeer} />
      </main>
      {/* <Route  exact path= "/beers" component={Beers} />
      <Route  path= "/beers/:id" component={SingleBeer} /> */}

      <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © Beer Buzz
            <p className="grey-text text-lighten-4 right"><i className="material-icons">favorite_border</i></p>
            </div>
          </div>
      </footer>
    </div>
    </HashRouter>
  )
}

export default Root
