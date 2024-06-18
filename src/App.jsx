// import { useState } from 'react'
import Button from './Components/Button'
import './App.css'

function App() {

  return (
    <div>
    <h1>Language Practice - Counting</h1>

    <Button buttonText={"⬅️"}/>
    <Button buttonText={"➡️"}/>

    <Button buttonText={"Show/Hide English"}/>
    <Button buttonText={"Show/Hide Japanese"}/>

    <Button buttonText={"Random (English)"}/>
    <Button buttonText={"Random (Japanese)"}/>

    <p>English: </p>
    <p>Japanese: </p>

    </div>
  )
}

export default App
