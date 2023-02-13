import { useState } from 'react'
import DropDown from './DropDown';
import './App.css'

function App() {
  let dList = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
  ]

  return (
    <div className="App">
      < DropDown items={dList}/>
    </div>
  )
}

export default App
