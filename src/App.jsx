import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Index } from "./components"
import { Header } from './components/header'
import "./styles/styles.css"

function App() {

  return (
    <>
    <Header />
    <div className="container mx-auto mt-20">
      <div className="mt-12 flex">
       <Index></Index>
      </div>
    </div>
    </>
  )
}

export default App
