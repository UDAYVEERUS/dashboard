import React, { useEffect, useState } from "react";
import { connect } from "react-redux";


const Notification = ({notification, notification_flag})=>{
    const [display, updateDisplay] = useState(false)
    React.useEffect(()=>{
        if(!notification_flag && display){
            setTimeout(()=>{
                updateDisplay(false)
            },5000)
        }
        if(notification_flag){
            updateDisplay(true)
        }
    },[notification_flag])
    if(display)
    return(
        <div className="text-lg bg-black text-white fixed top-5 right-5 px-5 py-2.5 rounded  z-10 border border-slate-50">
            {notification}
        </div>
    )
    return(
        <div />
    )
}
const mapStateToProps = (state) => {
    const {notification_flag, notification} = state.variables
    return{
        notification,
        notification_flag
    }
}

 export default connect(mapStateToProps)(Notification)