import React from "react";
import ContactItems from "./ContactItems";

const ContactList = ({contacts_array}) => {
    return(
        <div className="grid grid-cols-4 container mx-auto gap-3">
        { contacts_array&& contacts_array.map((value, index)=>{
            return <ContactItems key={index} contactData={value} />
            
        })}
        </div>
    )
}



export default ContactList