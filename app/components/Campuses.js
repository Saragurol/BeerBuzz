import React, { Component } from 'react'
import {fetchCampuses, postCampus, removeCampus} from '../reducers/subCampusReducer'
import {connect} from 'react-redux'
import Campus from './Campus'
import CreateCampus from './createCampus'

export class AllCampuses extends Component {
    async componentDidMount() {
        this.props.fetchInitialCampuses()
    }

    render() {
        const campuses = this.props.campuses
        const postACampus = this.props.postACampus
        const removeACampus = this.props.removeACampus
        return (
        <div id= "campus-list" >
            <CreateCampus postACampus= {postACampus} />
            <h1>All Campuses</h1>
                {
                    campuses.map(campus => <Campus campus={campus}key={campus.id} removeACampus={removeACampus} />)
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
        fetchInitialCampuses: () => dispatch(fetchCampuses()),
        postACampus: (campusInfo) => dispatch(postCampus(campusInfo)),
        removeACampus: (campudId) => dispatch(removeCampus(campudId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
