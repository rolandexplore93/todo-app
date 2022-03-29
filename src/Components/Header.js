import React, { Component } from 'react'
import '../App.css'

class Header extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         tasks: [],
         currentTask: {
            userInput: "",
             key: ""
         }
      }
    }

    // Get user input and create a unique key id for each task
    handleUserInput = (e) => {
        this.setState({
            currentTask: {
                userInput: e.target.value,
                key: Date.now()
            }
        })
    }

    // Confirm user input
    formSubmission = (e) => {
        e.preventDefault();
        console.log(this.state.currentTask)
    }

  render() {
      const { userInput, key } = this.state.currentTask
    return (
      <header>
          <form id='task-form' onSubmit={this.formSubmission}>
              <div className='form__entry'>
                  <input placeholder='What do you want to do?' value={userInput} onChange={this.handleUserInput} />
                  <button type='submit'>Add</button>
              </div>
        
          </form>
      </header>
    )
  }
}

export default Header