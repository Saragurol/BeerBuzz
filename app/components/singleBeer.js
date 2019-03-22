import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneBeer} from '../reducers/subBeerReducer'
import {Link} from 'react-router-dom'


export class SingleBeer extends Component {
    async componentDidMount () {
        const beerId = await Number(this.props.match.params.id)
        await this.props.fetchBeer(beerId)
    }
    render(){
        const beer = this.props.beer

        return (
            <div className="container">
            <div className="col s12 m7">
                <div className="card horizontal">
                <div className="card-image">
                    <img src={beer.imageUrl} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <p>{beer.discription}</p>
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
        fetchBeer: (beerId) => dispatch(fetchOneBeer(beerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeer)
