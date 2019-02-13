import React, { Component } from 'react'

export default class CreateStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit (event){
        event.preventDefault()
        this.props.postAStudent(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            gpa: ''
        })
    }
    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <form onSubmit= {this.handleSubmit}>

                <label htmlFor= "firstName"> First name: </label>
                <input
                type= "text"
                name = "firstName"
                value = {this.state.firstName}
                onChange = {this.handleChange} />

                <label htmlFor= "lastName"> Last name: </label>
                <input
                type= "text"
                name = "lastName"
                value = {this.state.lastName}
                onChange = {this.handleChange} />

                <label htmlFor= "email"> Email: </label>
                <input
                type= "text"
                name = "email"
                value = {this.state.email}
                onChange = {this.handleChange} />

                <label htmlFor= "gpa"> GPA: </label>
                <input
                type= "text"
                name = "gpa"
                value = {this.state.gpa}
                onChange = {this.handleChange} />
                <button type= "submit">Submit</button>

            </form>
        )
    }
}
