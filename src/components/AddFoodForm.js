import React, { Component } from 'react'

class AddFoodForm extends Component {
    state = {
        name: "",
        calories: 0,
        image: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.id] : e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image
        });
        this.props.renderForm(false)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} value={this.state.name} id="name" type="text"/>
                <label htmlFor="calories">Calories</label>
                <input onChange={this.handleChange} value={this.state.calories} id="calories" type="number"/>
                <label htmlFor="image">Image</label>
                <input onChange={this.handleChange} value={this.state.image} id="image" type="text"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddFoodForm