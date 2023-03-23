import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usersGet } from "../../actions";
import Notification from "../notification/Notification";
import UsersList from "./UsersList";

const Users = ({
    users_array,

    usersGet
}) => {
    useEffect(() => {
       usersGet()
    }, [])

    return(
        <div>
            {users_array &&
             <UsersList users_array = {users_array} />
            }
            <Notification />
        </div>
    )
}

const mapStateToProps = (state) => {
    const { users_array } = state.variables
    return {
        users_array
    }
}

const mapActionToProps = {
    usersGet
}

export default connect(mapStateToProps, mapActionToProps)(Users)