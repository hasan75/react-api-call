import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react/cjs/react.development';

function App() {
  return (
    <div className="App">
    <Counter></Counter>
    <LoadComments></LoadComments>
    </div>
  );
}
function LoadComments (){
  const [comments, setComments] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h3>Load Comments</h3>
      {
      comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment (props) {
  return (
    <div style={{backgroundColor:'skyblue', margin: '20px', padding: '15px', border: '3px solid grey', borderRadius: '15px'}}>
      <h3>Title: {props.title}</h3>
      <p>Comment: {props.body} </p>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const increaseHandle = () => setCount(count + 1);
  const decreaseHandle = () => setCount(count - 1);

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    borderRadius: '7px'
  }
  return(
    <div style={{backgroundColor:'skyblue', margin: '20px', padding: '15px', border: '3px solid grey', borderRadius: '15px'}}>
      <h3>Count: {count} </h3>
      <button style={buttonStyle} onClick={increaseHandle}>Increase</button>
      <button style={buttonStyle} onClick={decreaseHandle}>Decrease</button>
    </div>
  )
}

export default App;
