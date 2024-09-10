
import { useState } from 'react';
import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
const faqs = [
  {
    "title": "What is JSX?",
    "text": "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like."
  },
  {
    "title": "How do you create a React component?",
    "text": "A React component can be created either as a function or as a class that extends React.Component and must return JSX to render the UI."
  },
  {
    "title": "What is the use of useState in React?",
    "text": "useState is a Hook in React that allows you to add React state to function components."
  },
  {
    "title": "What is the virtual DOM?",
    "text": "The virtual DOM (Document Object Model) is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM by libraries such as React."
  },
  {
    "title": "Explain the lifecycle methods of a React component.",
    "text": "Lifecycle methods are hooks that allow you to run code at specific points in a component's lifecycle, such as componentDidMount, componentDidUpdate, and componentWillUnmount."
  },
  {
    "title": "What is props in React?",
    "text": "Props are short for properties and they are used to pass data from one component to another, specifically from parent to child components."
  },
  {
    "title": "How can you update the state of a component?",
    "text": "State can be updated using the setState method in class components or the update function from useState in functional components."
  },
  {
    "title": "What are keys in React and why are they important?",
    "text": "Keys are attributes that should be unique to elements in lists to help React identify which items have changed, are added, or are removed."
  },
  {
    "title": "What is the purpose of useEffect in React?",
    "text": "useEffect is a Hook that manages side-effects in function components, such as data fetching, subscriptions, or manually changing the DOM."
  },
  {
    "title": "How do you prevent components from re-rendering in React?",
    "text": "Components can be prevented from re-rendering by using React.memo for functional components or shouldComponentUpdate for class components."
  },
  {
    "title": "What is an event in JavaScript?",
    "text": "An event is an action or occurrence that happens in the system you are programming, which the system tells you about so you can respond to it in some way if desired."
  },
  {
    "title": "What are closures in JavaScript?",
    "text": "A closure is a combination of a function and the lexical environment within which that function was declared."
  },
  {
    "title": "What is the difference between == and === in JavaScript?",
    "text": "== is the equality operator that converts the operands to the same type before comparison, while === is the strict equality operator that does not perform type conversion."
  },
  {
    "title": "Explain the concept of hoisting in JavaScript.",
    "text": "Hoisting is JavaScript's behavior of moving declarations to the top of a scope (the global scope or the current function scope)."
  },
  {
    "title": "What is the this keyword in JavaScript?",
    "text": "The this keyword refers to the object that the function is a property of."
  },
  {
    "title": "What are JavaScript Promises?",
    "text": "Promises are used to handle asynchronous operations. They represent a value which may be available now, or in the future, or never."
  },
  {
    "title": "What are hooks in React?",
    "text": "Hooks are functions that let you hook into React state and lifecycle features from function components."
  },
  {
    "title": "What is the Context API in React?",
    "text": "The Context API allows you to share state across the entire app lightly and with ease."
  },
  {
    "title": "How can you pass a parameter to an event handler or callback?",
    "text": "You can pass a parameter to an event handler or callback by using an arrow function that calls the method with the parameter."
  },
  {
    "title": "What is React Router?",
    "text": "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL."
  }

]
function Accordion({data}){
  return (
    <div className='accordian'>
      {data.map((e,i) => <AccordianItem title={e.title} text={e.text} num={i} key={i}/>)}
    </div>
  );
}

function AccordianItem({num,title,text}) {


  function handleToggle(){
    setIsOpen(isopen => !isopen);
}

  const [isopen, setIsOpen] = useState(false);
  return (
    <div className= {`item ${isopen? "open" : ""}`} onClick = {handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon' >{isopen ? `-` : '+'}
      </p>
      {isopen && <div className='content-box'>{text}</div>}


    </div>
  );
}
function Header(){
  return (

    <div className='header'> 
    {/* <pre> */}
{/* <h4><FontAwesomeIcon icon={faReact} /> </h4> </pre> */}
    <p>ReactReveal</p> 
    {/* <pre> */}
    {/* <h4> <FontAwesomeIcon icon={faReact} /> </h4></pre> */}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <Header />
      <Accordion data={faqs}/>
    </div>
  );
}


