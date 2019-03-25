import React, { Component } from 'react'

export default class PutBrewery extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            // imageUrl: '',
            address: '',
            description: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit (event){
        event.preventDefault()
        this.props.updateBrewery(this.props.breweryId, this.state)
        this.setState({
            name: '',
            address: '',
            description: ''
        })
    }
    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="container">
            <form onSubmit= {this.handleSubmit}>

                <label htmlFor= "name"> Name: </label>
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

                <label htmlFor= "description"> Description: </label>
                <input
                type= "text"
                name = "description"
                value = {this.state.description}
                onChange = {this.handleChange} />
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>

            </form>
            </div>
        )
    }
}