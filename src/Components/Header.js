import React, { Component } from 'react'
import '../App.css'
import ListItems from './ListItems'

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

    // Get user input and create a unique key id for each task entered
    handleUserInput = (e) => {
        this.setState({
            currentTask: {
                userInput: e.target.value,
                key: Date.now()
            }
        })
    }

    // When a user submits the form
    formSubmission = (e) => {
        e.preventDefault();
        // confirm the data stored in the currentTask state
        const newTask = this.state.currentTask;
        console.log(newTask)
        // Condition if userInput is not empty
        if (newTask.userInput !== ""){
            const tasksData = [...this.state.tasks, newTask];
            // console.log(tasksData);
            // Modify the state: Set new data to this.state.tasks and set currentTask to empty
            this.setState({
                tasks: tasksData,
                currentTask: {
                    userInput: "",
                    key: ""
                }
            })
        }
    }

  render() {
      const { userInput} = this.state.currentTask
    return (
      <div>
        <header>
            <form id='task-form' onSubmit={this.formSubmission}>
                <div className='form__entry'>
                    <input placeholder='What do you want to do?' value={userInput} onChange={this.handleUserInput} />
                    <button type='submit'>Add</button>
                </div>
            </form>
        </header>
        <ListItems tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default Header