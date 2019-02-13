import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneCampus} from '../reducers/subCampusReducer'
import RegisteredStudents from './registeredStudents'


export class SingleCampus extends Component {
  async componentDidMount () {
    const campusId = Number(this.props.match.params.id)
    this.props.fetchCampus(campusId)
  }
  
  render () {
    const campus = this.props.campus
    return (
      <div id="single-student">
        <div className="student row" key={campus.id}>
          <div className="column">
            <h3>Campus Name: {campus.name}</h3>
            <a href="#">
              <img className="media-object" src={campus.imageUrl} alt="image" />
            </a>
            <h4>Address: {campus.address}</h4>
            <p>Description: {campus.description}</p>
            <RegisteredStudents campusId = {campus.id} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)