import React, { Component } from 'react'
import {fetchBreweries, deleteBrewery, postBrewery} from '../reducers/subBreweryReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PostBrewery from './PostBrewery'

export class AllBreweries extends Component {
    componentDidMount() {
        this.props.fetchBreweries()
    }

    render() {
        const breweries = this.props.breweries
        const removeBrewery = this.props.removeBrewery
        const addBrewery = this.props.addBrewery
        return (
        <div className= "brewery-list" >
            <div className="row"  >
                {
                    breweries.map(brewery =>
                        (
                        <div className="col s4" key={brewery.id}>
                            <Link to={`/breweries/${brewery.id}`}>
                                <h4>{brewery.name}</h4>
                            </Link>
                            <a href="#">
                                <img className="media-object circle" src={brewery.imageUrl} alt="image" />
                            </a>
                            <a className="waves-effect waves-light btn" onClick={() => removeBrewery(brewery.id)}><i className="material-icons right">delete</i>DELETE</a>
                        </div>
                        ))
                }
            </div>
                <div className="container">
                    <PostBrewery addBrewery={addBrewery} />
                </div>   
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
        fetchBreweries: () => dispatch(fetchBreweries()),
        removeBrewery: (breweryId) => dispatch(deleteBrewery(breweryId)),
        addBrewery: (brewery) => dispatch(postBrewery(brewery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBreweries)
