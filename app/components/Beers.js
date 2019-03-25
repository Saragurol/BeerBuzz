import React, { Component } from 'react'
import {fetchBeers, postBeer, deleteBeer} from '../reducers/subBeerReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PostBeer from './PostBeer'

export class AllBeers extends Component {    
    componentDidMount() {
        this.props.fetchInitialBeers()
    }

    render() {
        const beers = this.props.beers
        const addBeer = this.props.addBeer
        const removeBeer = this.props.removeBeer
        return (
        <div id="beer-list">
        <PostBeer addBeer={addBeer} />
            <div className="row">
            {
                beers.map(beer =>
                    (<div key={beer.id}>
                        <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                            <img src={beer.imageUrl} />
                            <span className="card-title">{beer.name}</span>
                            <Link className="btn-floating halfway-fab waves-effect waves-light red" to={`/beers/${beer.id}`}><i className="material-icons">add</i></Link>
                            </div>
                            <div className="card-content">
                            <p>{beer.name}</p>
                            <hr />
                            <a className="waves-effect waves-light btn" onClick={() => removeBeer(beer.id)}><i className="material-icons right">delete</i>DELETE</a>
                            </div>
                        </div>
                      
                        </div>
                      
                     </div>))
            }
            </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        beers: state.beerSubReducer.beers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialBeers: () => dispatch(fetchBeers()),
        addBeer: (beer) => dispatch(postBeer(beer)),
        removeBeer: (beerId) => dispatch(deleteBeer(beerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBeers)

