// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Example from './Example'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>Hello Everyone!! This is Kowshik.</p>
//       </header>
//     </div>


    // <h1> Kowshik </h1>
    // <p> This is the sample examplr for the function component. </p>  // It cannot returns two elements
    // // To return this elements we need to be inserted in div tag

    // <div>
    //   <h1>Hello Everyone!! This is Kowshik407</h1>
    //   <p> This is the smaple example for a function component</p>
    //   <h2> Fragment JSx </h2>
    // </div>
//   );
// }

// export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';
// NOTE : the function name should be started with capital letter. It must be

// Functional Components

// function Show() {
//   ReactDOM.render(<p> This is by using the ReactDOM render. </p>, document.getElementById('sample'))
//   return(
//     <div>
//       <h1> Function Component </h1>
//       <p> By using the return statement</p>
//     </div>
//   );
//   // To display both needs to be changed in index.html
// }

// export default Show;


// import React,{Component} from 'react';

// // Class Components

// class MyComponent extends React.Component {
//   render() {
//     return(
//       <div> <h1> Class Component </h1> </div>
//     );
//   }
// }

// export default MyComponent;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Example from './Example'

// function App() {
//   return (
//     <div className="App">
//       <h1> React JS </h1>
//       <Example name="Kowshik">
//         <p> I'm from Kadapa. </p> 
//       </Example>  {/* this is at the next js page. */}
//       <Example name="Aravind">
//         <p> I'm from Adoni. </p>
//       </Example>
//       <Example name="Sridhar">
//         <p> I'm from Kurnool. </p>
//       </Example>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import PropinFunction from './ExamplePropinfunction'
// function App() {
//   return (
//     <div className="App">
//       <h1> React JS </h1>
//       {/* <PropinFunction name="Kowshik Kumar" sname='Aitha'/> */}
//       <PropinFunction myname="Kowshik" exam="IT Exam"/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ClassState from './ClassState'
// function App() {
//   return (
//     <div className="App">
//       <h1> React JS </h1>
//       <ClassState />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncHook  from './FunctionHooks'
function App() {
  return (
    <div className="App">
      <h1> React JS </h1>
      <FuncHook />
    </div>
  );
}

export default App;
