import React, { Component } from 'react'
import Overlay from '../component/InputOverlay'

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

  handleMessageInput = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const trimmedString = this.state.input.trim()
    if (trimmedString.length !== 0 && trimmedString.length <= 500) {
      this.props.newMessage(this.state.input)
      this.setState({input: ""})
    }
  }

  render() {
    const style = this.props.isMobile ? {} : {position: 'fixed', top: '100vh', width: '100vw'}
    return (
      <form onSubmit={this.handleSubmit} style={style}>
        {
          this.props.isMobile ? null :
          <Overlay text={this.state.input}/>
        }
        <input ref={(input) => {this.input = input}} onChange={this.handleMessageInput} type="text" placeholder="Message" value={this.state.input} autoFocus/>
        <input type="submit" value="Send" />
      </form>
    )
  }
}

export default MessageForm