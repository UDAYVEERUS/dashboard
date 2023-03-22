import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../actions";
import ContactList from "./ContactList";

const Contacts = ({
    contacts_array,

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
        </div>
    )
}

const mapStateToProps = (state)=>{
    const{
        contacts_array,
        message,test
    }=state.variables 
    return {
        contacts_array,
        message,test
    }
}
const mapActionToProps = {
    getContacts
}
export default connect(mapStateToProps, mapActionToProps)(Contacts)