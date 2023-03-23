import React from "react";
import { changeVaribale } from "../../actions/variables";

const ContactItems = (props) =>{
    const {name, email, mobile, subject, message} = props.contactData

    
    const display_contact_modal = () => {
        changeVaribale("modal_contact_name")
        changeVaribale("modal_contact_email")
        changeVaribale("modal_contact_mobile")
        changeVaribale("modal_contact_subject")
        changeVaribale("modal_contact_message")
    }
    return(
        <div onClick={()=>{display_contact_modal()}} className="w-fit h-fit p-2.5 m-1 rounded border border-light-grey shadow cursor-pointer bg-slate-100">
                <div>name : {name}</div>
                <div>email : {email}</div>
                <div>mobile : {mobile}</div>
                <div>subject : {subject}</div>
                <div>message : {message}</div>
        </div>
    )
}

export default ContactItems

