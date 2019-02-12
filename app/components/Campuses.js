import React, { Component } from 'react'
import {fetchCampuses} from '../reducers/subCampusReducer'
import {connect} from 'react-redux'

export class AllCampuses extends Component {
    
    async componentDidMount() {
        this.props.fetchInitialCampuses()
    }
    render() {
        const campuses = this.props.campuses
        return (
        <div>
            <h1>All Campuses</h1>
            <ul className = "campus-list" >
                {campuses.map(campus => <li key={campus.id}>Name: {campus.name} Image:{campus.imageUrl} </li>)}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campusSubReducer.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialCampuses: () => dispatch(fetchCampuses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
