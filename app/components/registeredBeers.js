import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllRegisteredBeers} from '../reducers/subBreweryReducer'
import {Link} from 'react-router-dom'

export class RegisteredBeers extends Component {
    async componentDidMount () {
        if (this.props.breweryId) {
            this.props.fetchAllRegisteredBeers(this.props.breweryId)
        }
    }
     
    render () {
        const beers = this.props.beers
        console.log("I AM BEERS", beers)
        let result;
        if (beers.length === 0) {
            result = <li>Sorry no beers attend this campus.</li>
        } else {
            result = beers.map(beer => 
            <Link key= {beer.id} to={`/beers/${beer.id}`}>
                <li >
                    {beer.name}
                </li>
            </Link>)
        }
        return (
            <div className="beer-list row">
            <div className="column">
                <ul>{result}</ul>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.brewerySubReducer.beers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllRegisteredBeers: (breweryId) => dispatch(fetchAllRegisteredBeers(breweryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredBeers)
