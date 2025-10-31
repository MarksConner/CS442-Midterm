import { useState, useEffect } from 'react'
import { Button, Heading, Flex, View, Grid, Divider } from '@aws-amplify/ui-react'
import reactLogo from './assets/react.svg'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css";
import { geneerateClient} from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import viteLogo from '/vite.svg'
import './App.css'
import { Divider } from '@aws-amplify/ui-react'

function App() {
  const [count, setCount] = useState(0)

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
        <button onClick={() => setCount((count) => count + 1)}>
          My favorite restaurant is Coconut Downtown
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
