import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchOneCampus from '../reducers/subCampusReducer'

export class RegisteredCampus extends Component {
    async componentDidMount () {
        if (this.props.campusId) {
            this.props.fetchCampus(this.props.campusId)
        }
    }
    render () {
        const campus = this.props.campus
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
