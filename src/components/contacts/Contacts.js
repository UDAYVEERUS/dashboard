import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../actions";
import Notification from "../notification/Notification";
import ContactList from "./ContactList";
import MessageAddModal from "./MessageAddModal";
const Contacts = ({
    contacts_array,
    add_contact_flag,


    getContacts
}) => {

    useEffect(() => {
        getContacts()
    }, [])
    return (
        <div>
            { contacts_array&&
            <ContactList contacts_array={contacts_array} />
            }
            {add_contact_flag&&
            <MessageAddModal />}
            <Notification />
        </div>
    )
}

const mapStateToProps = (state)=>{
    const{
        contacts_array,
        message,
        add_contact_flag

    }=state.variables 
    return {
        contacts_array,
        message,
        add_contact_flag
    }
}
const mapActionToProps = {
    getContacts
}

export default connect(mapStateToProps, mapActionToProps)(Contacts)