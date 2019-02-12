import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneCampus} from '../reducers/subStudentReducer'


export class SingleCampus extends Component {


  async componentDidMount () {
    const campusId = Number(this.props.match.params.campusId)
    this.props.fetchCampus(campusId)
  }
  render () {
    const campus = this.props.student
    return (
      <div id="single-student">
        <div className="student row" key={campus.id}>
          <div className="column">
            <h3>{campus.name}</h3>
            <a href="#">
              <img className="media-object" src={campus.imageUrl} alt="image" />
            </a>
            <h4>Address: {campus.address}</h4>
            <p>Description: {campus.description}</p>
            <li>Enter List of All students in that campus</li>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        campus: state.studentSubReducer.campus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampus: () => dispatch(fetchOneCampus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)