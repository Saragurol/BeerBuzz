import React, { Component } from 'react'

export default class UpdateCampus extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit (event){
        event.preventDefault()
        this.props.postACampus(this.state)
        this.setState({
            name: '',
            address: ''
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
                <h2>Update Campus: </h2>

                <label htmlFor= "name"> Campus name: </label>
                <input
                type= "text"
                name = "name"
                value = {this.state.name}
                onChange = {this.handleChange} />

                <label htmlFor= "address"> Address: </label>
                <input
                type= "text"
                name = "address"
                value = {this.state.address}
                onChange = {this.handleChange} />
                <button type= "submit">Submit</button>

            </form>
        )
    }
}