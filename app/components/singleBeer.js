import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneBeer, putBeer} from '../reducers/subBeerReducer'
import {Link} from 'react-router-dom'
import PutBeer from './PutBeer'


export class SingleBeer extends Component {
    async componentDidMount () {
        const beerId = await Number(this.props.match.params.id)
        await this.props.fetchBeer(beerId)
    }
    render(){
        const beer = this.props.beer
        const updateBeer = this.props.updateBeer

        return (
            <div className="container">
            <div className="col s12 m7">
                <div className="card horizontal">
                <div className="card-image">
                    <img src={beer.imageUrl} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <p>{beer.description}</p>
                    <hr />
                    <p>Alcohol by Volume: {beer.volume}</p>
                    </div>
                    <div className="card-action">
                        {
                            (beer.brewery) ?
                            <Link to={`/breweries/${beer.breweryId}`}>{beer.brewery.name} </Link> :
                            <h5>Sorry, there is no brewery listed</h5>
                        }
                    </div>
                </div>
                </div>
            </div>
            <PutBeer beerId={beer.id} updateBeer={updateBeer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beer: state.beerSubReducer.beer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBeer: (beerId) => dispatch(fetchOneBeer(beerId)),
        updateBeer: (beerId, beer) => dispatch(putBeer(beerId, beer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeer)
