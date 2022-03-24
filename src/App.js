import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h>STIMULAR</h>
        
//       </header>
//       <body>
//     <button type="button" class="collapsible">Open Collapsible</button>
// <div class="content">
//   <p>Lorem ipsum...</p>
// </div>

//      <div className="vraag">
//        <h>Vraag 1</h>
//        <p>dit is vraag 1</p>
//        <textarea>   Hello there, this is some text in a text area</textarea>
//      </div>

//      <div id="test_button_container"></div>

//      <Welcome name="Sara" />

     
      

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
    check: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  

  render() {
    return (
      
      
    
        
      

      <form onSubmit={this.handleSubmit}>
        <div className="vraag">
        <h>Vraag 1</h>
        <p>dit is vraag 1</p>
      {/* <label><input name="ja" type="radio"/>ja: </label>        
          
            <label>
              Nee:
           <input
            name="nee"
            type="radio"
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
             />
        </label> */}
        <div onChange={event => this.setGender(event)}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
        <br />
        </div>
        <br />
        <div className="vraag">
        <h>Vraag 2</h>
        <p>dit is vraag 2</p>

        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
        
        </div>

        <div className='vraag'>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </label>
        </div>
      </form>
      
      
    );
  }
}

             


             
//   </body>
//     </div>
//   );
// }



export default App;
