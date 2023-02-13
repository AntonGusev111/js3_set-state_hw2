import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'


function App() {
  let [selected, setFilter] = useState('All');

  return (
    <div className="App">  
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected="All"
        onSelectFilter={(filter) =>setFilter(filter.target.innerText)}/>
    <ProjectList selected={selected} />
    
    </div>

    
  )
}

export default App
