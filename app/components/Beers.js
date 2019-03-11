import React, { Component } from 'react'
import {fetchBeers} from '../reducers/subBeerReducer'
import {connect} from 'react-redux'
import Beer from './Beer'

export class AllBeers extends Component {    
    async componentDidMount () {
        this.props.fetchInitialBeers()
    }
    
    render() {
        const beers = this.props.beers
        return (
        <div id="beer-list">
            <h1>All Beers</h1>
            {
                beers.map(beer => <Beer beer={beer} key={beer.id} />)
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beerSubReducer.beers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialBeers: () => dispatch(fetchBeers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBeers)
