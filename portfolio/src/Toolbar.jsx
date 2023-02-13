import React from 'react'

export default function Toolbar(props) {
    let buttons = props['filters'].map((elem, index)=>{
        return <div onClick={props.onSelectFilter} key={index} class ='filter'>{elem}</div> 
    })

  return (
    <div>
        <div className="headBar">
            {buttons}
        </div>
    </div>
  )
}
