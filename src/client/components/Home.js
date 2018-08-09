import React from 'react'
import socket from '../socket'

export default class NameForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
          client: socket(),
          value: '',
          user: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        const onRegisterResponse = user => this.setState({ user })
        this.state.client.register(this.state.value, (err, user) => onRegisterResponse(user))
        event.preventDefault()
    }

  
    render() {
      return (
        // let userName = this.state.user

        // <div>{userName}<div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
}
  