import { useState } from 'react'
import './App.css'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'


const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];


function App() {
  let [icon, setIcon] = useState('ViewModule');



  let selectI = () =>{
    if (icon == 'ViewModule'){
      
      return 'ViewList'
    } else {
      
      return 'ViewModule'
    }
  }
  console.log(icon) 
  
  if (icon == 'ViewModule'){
    return (
      <div className="App">
        <IconSwitch icon={icon} onSwitch={() => setIcon(selectI) }/>
        <div className="Listview">< CardsView ShopCard={products}/></div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <IconSwitch icon={icon} onSwitch={() => setIcon(selectI)}/>
        <div className="Listview"><ListView items={products}/></div>
      </div>
      )
  }

  console.log(icon)

  
}

export default App



