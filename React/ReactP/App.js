import React from "react";
import ReactDOM from "react-dom/client";

function Title(){
  return(
    <div>
      <h1> Hello components</h1>
      <p>Functional components.......</p>
    </div>
  );
};

function Images(){
  return(
    <div>
      <img
          src="https://reactjs.org/logo-og.png"
          alt="React Logo"
          width="400"
        />
    </div>
  );
};

function Form(){
  return(
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Enter name"></input><br />
      <input type="text" placeholder="Enter email id"></input><br />
      <input type="text" placeholder="Enter password"></input><br />
      <button type="submit">Submit</button>
    </div>
  );
};

const Container = () => {
  return( 
      <div id ="div" style={{backgroundColor:"red"}}>
        <h1>
          Hello React....
          <br />
        </h1>
        <a href="https://react.dev" target="_blank">
          Learn React Official Site
          <br />
        </a>
        <Title />
        <Images />
        <Form />
      </div>
);
};
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);