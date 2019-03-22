import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneBrewery, putBrewery} from '../reducers/subBreweryReducer'
import RegisteredBeers from './registeredBeers'
import PutBrewery from './PutBrewery'

export class SingleBrewery extends Component {
  async componentDidMount () {
    const breweryId = await Number(this.props.match.params.id)
     await this.props.fetchBrewery(breweryId)
  }
  render () {
    const brewery = this.props.brewery
    const updateBrewery = this.props.updateBrewery
    return (
      <div>
      <div className="row">
        <div className="col s12 m7" key={brewery.id}>
          <div className="card">
            <div className="card-image">
            <img className="media-object" src={brewery.imageUrl} alt="image" />
            </div>
            <div className="card-content">
            <span className="card-title">{brewery.name}</span>
              <p>{brewery.description}</p>
            </div>
            <div className="card-content">
              <p>Address: {brewery.address}</p>
            </div>
            <div className="card-action">
              <RegisteredBeers breweryId = {brewery.id} />
            </div>
          </div>
        </div>
      </div>
      <PutBrewery breweryId ={brewery.id} updateBrewery={updateBrewery} />
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
        fetchBrewery: (breweryId) => dispatch(fetchOneBrewery(breweryId)),
        updateBrewery: (breweryId, brewery) => dispatch(putBrewery(breweryId, brewery))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBrewery)
