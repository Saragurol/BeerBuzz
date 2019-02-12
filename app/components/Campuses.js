import React, { Component } from 'react'
import {fetchCampuses} from '../reducers/subCampusReducer'
import {connect} from 'react-redux'
import Campus from './Campus'

export class AllCampuses extends Component {
    
    async componentDidMount() {
        this.props.fetchInitialCampuses()
    }
    render() {
        const campuses = this.props.campuses
        return (
        <div id= "campus-list" >
            <h1>All Campuses</h1>
                {
                    campuses.map(campus => <Campus campus={campus}key={campus.id} />)
                }
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
