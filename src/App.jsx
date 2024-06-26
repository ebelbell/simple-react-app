import { useState } from "react";
import "./App.css";
import Header from "./Header";


// add props to the components for inline styling
function Content(props) {
  return (<p style={{color: props.color}}>{props.text} </p>); // change the color of the content text. change the color in the main app component.
}

function Footer() {
  return (<h3> Copyright Elyzha's work. created by me. </h3>);
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    // return the different section functions
    <>
      {/* imports the Header component from 'Header.jsx' */}
      {/* imports the Content component from 'Content.jsx'*/}
      <Header />
      <Content color="cyan" text="This is my first React Application!" />
      <Content color="magenta" text="Say your prayers..." />
      <Content color="beige" text="I think I've got it!" />
      {/* imports the Footer component from 'Footer.jsx' */}
      <Footer />
    </>
  );
}

export default App;