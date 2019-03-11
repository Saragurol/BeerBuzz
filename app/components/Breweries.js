import React, { Component } from 'react'
import {fetchBreweries} from '../reducers/subBreweryReducer'
import {connect} from 'react-redux'
import Brewery from './Brewery'

export class AllBreweries extends Component {
    async componentDidMount() {
        this.props.fetchBreweries()
    }

    render() {
        const breweries = this.props.breweries
        return (
        <div id= "brewery-list" >
            <h1>All Breweries</h1>
                {
                    breweries.map(brewery => <Brewery brewery={brewery}key={brewery.id} />)
                }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breweries: state.brewerySubReducer.breweries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBreweries: () => dispatch(fetchBreweries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBreweries)
