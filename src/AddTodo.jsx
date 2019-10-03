import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ content: '' });
    }
    handleChange = (e) => {
        this.setState({ content: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.content} onChange={this.handleChange} type="text" id='first_name' class='validate' placeholder='Enter New Todo' />
                </form>
            </div>
        );
    }
}

export default AddTodo;
