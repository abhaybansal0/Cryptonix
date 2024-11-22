import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowBtn] = useState(false)

  const [Todos, setTodos] = useState([
    {
      title: "Abhay",
      desc: "I am a Sigma Coder"
    },
    {
      title: "Deepa",
      desc: "I am a bleh Coder"
    },
    {
      title: "CMOS",
      desc: "I am a phaltu Coder"
    }
  ])


  const Todo = ({todo}) =>{
    return(
      <>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        {/* {showbtn? <button onClick={()=>{}}> I Am Revealed</button>: "Hidden"} THIS IS ONE WAY OF DOING IT */}

        {showbtn && <button onClick={()=>{}}> I Am Revealed</button> }



        {Todos.map(todo =>{
          return <Todo key={todo.title} todo={todo}/>
        })}


        <button onClick={() => setshowBtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
