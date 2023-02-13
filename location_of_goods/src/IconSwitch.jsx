import React from 'react'
import { ViewList } from '@material-ui/icons'
import { ViewModule } from '@material-ui/icons'

export default function IconSwitch(props) {
    let icon;

    if(props.icon=='ViewList'){
        icon = <ViewList onClick={props.onSwitch}></ViewList>
    } else{
        icon = <ViewModule onClick={props.onSwitch}></ViewModule>
    }

  return (
    <div>
        <div className="header">
            <div className="icon">
               {icon}
            </div>
        </div>
    </div>
  )
}
