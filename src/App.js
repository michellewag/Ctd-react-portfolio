import React from 'react';
import './App.css';




//this part works good  

class App extends React.Component {
    render() {
           return (
    <div className="App">
      <h1>React Portfolio</h1>
      <p>Name: {this.props.myName}</p>
      <p>Organization: {this.props.myOrganization}</p>
      <p>Instructor: {this.props.myInstructor}</p>
    </div>
   );
  }
 }

//fix up this class component

  class Moreinfo extends React.Component {
    render() {
          return (
    <div className = "MoreInfo">
    <h1>Beginner Class</h1>
        <p>We learned many topics in this class.</p>
        <p>They are listed below:{this.props.beginnerClass}</p>
    </div>
 );
 }
}
  
     
  
// hard copy what we learned first then call it in a component 

let beginnerClass = [
    "directories", "abstractions", "JavaScript Operators", 
    "variables", "arrays", "objects", "prototypes",
    "if/then statements, for loops, while loops",
    "functions", "factory functions", "key/value pairs"
    ];
    
let intermediateClass = [
    "scope", "properties", "methods", "npm packages",
    "test driven development", "Git/GitHub, HTML/CSS", 
    ];
    
let advancedClass = ["React"];
    
  
  
 // ----  IDEAS----- 
  // {props.beginnerClass}               
                
   
 //  function render() {
  //     ReactDOM.render(<App />, document.getElementById('root'));
 //  }
   
 //  render();
 //     <ClassInfo beginnerClass = {beginnerClass} />,
      
      
      
  
  
  
  
  




export default App;
