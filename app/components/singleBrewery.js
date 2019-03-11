import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneBrewery} from '../reducers/subBreweryReducer'
import RegisteredBeers from './registeredBeers'

export class SingleBrewery extends Component {
  async componentDidMount () {
    const breweryId = Number(this.props.match.params.id)
    this.props.fetchBrewery(breweryId)
  }
  
  render () {
    // console.log("BREWERY", this.props.brewery)
    const brewery = this.props.brewery
    return (
      <div id="single-beer">
        <div className="beer row" key={brewery.id}>
          <div className="column">
            <h3>Brewery name: {brewery.name}</h3>
            <a href="#">
              <img className="media-object" src={brewery.imageUrl} alt="image" />
            </a>
            <h4>Address: {brewery.address}</h4>
            <p>Description: {brewery.description}</p>
            <RegisteredBeers breweryId = {brewery.id} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        brewery: state.brewerySubReducer.brewery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBrewery: (breweryId) => dispatch(fetchOneBrewery(breweryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBrewery)