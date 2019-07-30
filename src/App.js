import React from 'react';
import './App.css';



class App extends React.Component {
    render() {
           return (
    <div className="App">
      <h1>React Portfolio</h1>
      <p>Name: {this.props.myName}</p>
      <p>Organization: {this.props.myOrganization}</p>
      <p>Instructor: {this.props.myInstructor}</p>
      <h1>Beginner Class</h1>
      <p>{beginnerClass}</p>
      <h2>Intermediate Class</h2>
      <p>{intermediateClass}</p>
      <h3>Advanced Class</h3>
      <p>{advancedClass}</p>
     </div>
     );
   }
 }


let beginnerClass = [
    "Directories,", "  abstractions,", "  data types,", "  JavaScript operators,", 
    "  variables,", "  arrays,", "  objects,", "  prototypes,",
    "  if/then statements,", "  for loops,", "  while loops,",
    "  functions,", "  factory functions,", "  key/value pairs"
   ];
    
let intermediateClass = [
    "Scope,", "  properties,", "  methods,", "  npm packages,",
    "  test driven development,", "  Git/GitHub,", "  HTML/CSS", 
    ];
    
let advancedClass = ["React"];
    
  
  
 

export default App; 