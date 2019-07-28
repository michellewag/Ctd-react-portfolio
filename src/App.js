import React from 'react';
import './App.css';

let myName = ' Michelle Wagner';
let myOrganization = ' Code the Dream';
let myInstructor = ' Jared Siirila';

//let classData = [
//  {session: "Beginner Class", topic: "directories, abstractions, JavaScript Operators"}, 
//  {session: "Beginner Class", topic: "variables, arrays, objects, prototypes"},
//  {session: "Beginner Class", topic: "if/then statements, for loops, while loops"},
//  {session: "Beginner Class", topic: "functions, factory functions, key/value pairs"},
//  {session: "Intermediate Class", topic: "scope, properties, methods, npm packages"},
//  {session: "Intermediate Class", topic: "test driven development, Git/GitHub, HTML/CSS"},
//  {session: "Advanced Class", topic: "React"}
//  ];
  
function App() {
  return (
    <div className="App">
      <h1>React Portfolio</h1>
      <p>Name:{myName}</p>
      <p>Organization:{myOrganization}</p>
      <p>Instructor:{myInstructor}</p>
    </div>
  );
}


/*function ClassInfo(props) {
  let session = props.session;
  let listItems = beginnerClass.map((topics) =>*/
  
  function moreinfo() {
    
         <h1>Beginner Class</h1>;
         
         return <p>`We learned many topics in this class.
           They are listed below:{beginnerClass}`</p>;
      }
  

let beginnerClass = [
   "directories", "abstractions", "JavaScript Operators", 
   "variables", "arrays", "objects", "prototypes",
   "if/then statements, for loops, while loops",
   "functions", "factory functions", "key/value pairs"
    ];
    
   
   
   
   {this.app()}
 //     <ClassInfo beginnerClass = {beginnerClass} />,
      
      
      
  
  
  
  
  




export default App;
