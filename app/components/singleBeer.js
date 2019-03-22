import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneBeer} from '../reducers/subBeerReducer'

export class SingleBeer extends Component {
    async componentDidMount () {
        const beerId = await Number(this.props.match.params.id)
        await this.props.fetchBeer(beerId)
    }
    render(){
        const beer = this.props.beer
        console.log("BEER", beer)
        return (
            <div className="container">
            <div className="col s12 m7">
                <h2 className="header">Single Beer</h2>
                <div className="card horizontal">
                <div className="card-image">
                    <img src={beer.imageUrl} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <p>{beer.discription}</p>
                    </div>
                    <div className="card-action">
                    <a href="#">This is a link</a>
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
