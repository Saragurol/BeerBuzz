import React, { Component } from 'react'
import {fetchCampuses} from '../reducers/subCampusReducer'
import {connect} from 'react-redux'

export class AllCampuses extends Component {
    componentDidMount () {
        this.props.fetchInitialCampuses()
    }
    render() {
        const campuses = this.props.campuses
        return (
        <div>
            <ul className = "campus-list" >
                {campuses.map(campus => <li key={campus.id}>Name: {campus.name} Image:{campus.image} </li>)}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialcampuses: () => dispatch(fetchCampuses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
