import React from 'react'
import { useState } from 'react'

export default function DropDown(props) {
    let [listState, setState] = useState(true);
    let [sItem, setSelect] = useState();

    let activate = ()=> {
        if(listState){
            setState(false);
        } else{
            setState(true);
        }
    }

    let contentList = props.items.map((elem, index)=>{
        let result;
        if(sItem==elem){
            result = <li class='dList' key={index} ><a class='dlishHref active' href="#" >{elem}</a></li>
        } else {
            result = <li class='dList' key={index} ><a onClick={()=>{setSelect(elem)}} class='dlishHref' href="#" >{elem}</a></li>
        }

        return result
    })

 if(listState){
    return (
        <div>
          <button onClick={()=>{setState(false)}} class='ddown'>ACCOUNT SETTINGS</button>
          <div className="dcontent">{contentList}</div>
        </div>
      )
 } else{
    return (
        <div>
          <button onClick={()=>{setState(true)}} class='ddown'>ACCOUNT SETTINGS</button>
          <div  className="dcontent hidden">{contentList}</div>
        </div>
      )
 }

}
