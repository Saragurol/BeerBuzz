import React, { Component } from 'react'
import {fetchCampuses} from '../reducers/subCampusReducer'
import {connect} from 'react-redux'
import Campus from './Campus'
import CreateCampus from './createCampus'
import axios from 'axios'

export class AllCampuses extends Component {
    constructor () {
        super()
        this.state = {
            campuses: []
        }
        this.addCampus = this.addCampus.bind(this)
    }
    
    async componentDidMount() {
        this.props.fetchInitialCampuses()
    }

    async addCampus (newCampus) {
        const response = await axios.post('/api/campuses', newCampus)
        this.setState({
            campuses: [...this.state.campuses, response.data]
        })
    }
    render() {
        const campuses = this.props.campuses
        return (
        <div id= "campus-list" >
            <CreateCampus addCampus= {this.addCampus} />
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
