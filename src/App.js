import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: [
          "Only on Tuesdays",
          "No Cookie u",
          "For asking that... I'm kicking you out of my Minecraft Server..",
          "ssss",
          "Yes"
      ],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!
    // Update the return statement below to reflect the outcome of your code.
    //console.log(answerArray)
//<img src="img/fishes.png" class="fishes"/>
    //return //answerArray//"Big Booty Bitches"//this.state.question

    return answerArray[Math.floor(Math.random()*answerArray.length)]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    //if (this.state.qustion)
    let answer = "Put in a question."
    if(this.state.question.includes("?")){
        answer = "                   " + this.getAnswer()
    }

    this.setState({ answer: answer })
    this.setState({ bubble: <img src="https://lh3.googleusercontent.com/proxy/Ei5UDrmQEbAPSfn0tzkDcY6UeHB9QMYB9RRX3RgBcYQ93uiBUG7Et0mMZ0zl_hmy1jxFLaKARRDwNmZbeUQL0dLFcIELaIpkTi-lgVagTIPZF1pklgcJs-vx5d9pjHFe3h-FVA" class="bubble"/> })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Boi</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p> { this.state.answer } </p>
        <div> { this.state.bubble } </div>
      </div>
    )
  }
}

export default App;
