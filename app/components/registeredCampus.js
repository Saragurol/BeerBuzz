import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchOneCampus from '../reducers/subCampusReducer'

export class RegisteredCampus extends Component {
    async componentDidMount () {
        if (this.props.campusId) {
            console.log('SLEEPY', this.props.campusId)
            this.props.fetchCampus(this.props.campusId)
        }
    }   
    render () {
        const campus = this.props.campus
        console.log("HERE MEOW", campus)
        let result;
        if (campus.name !== undefined) {
            result = <Link to={`/campuses/${campus.id}`}>
            {campus.name}
            </Link>
            
        } else {
            result = 'Sorry, this student is not registered to any campuses'
        }
        return (
            <div className="students campus">
            <div className="column">
                <h4>{result}</h4>
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