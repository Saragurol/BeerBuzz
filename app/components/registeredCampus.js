import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchOneCampus from '../reducers/subCampusReducer'

export class RegisteredCampus extends Component {
    async componentDidMount () {
        if (this.props.campusId) {
            console.log("HERE IS CAMPUS ID", this.props.campusId)
            console.log("ALL PROPS", this.props)
            this.props.fetchCampus(this.props.campusId)
        }
    }   
    render () {
        const campus = this.props.campus
        console.log("CAMPUS INFO", campus)
        return (
            <div className="students campus">
            <div className="column">
                <Link to={`/campuses/${campus.id}`}>
                    <h4>Campus: {campus.name}</h4>
                </Link>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campus: state.campusSubReducer.campus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampus: (campusId) => dispatch(fetchOneCampus(campusId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredCampus)
