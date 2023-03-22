import React from "react";
const UsersItem = (props) => {
    const {name, email, mobile} = props.usersData
    return (
        <div className="w-full h-36  p-2.5 m-1 rounded border border-light-grey shadow cursor-pointer bg-slate-100">
            <div>name -{name}</div>
            <div>email -{email}</div>
            <div>name -{mobile}</div>
        </div>
    )
}

export default UsersItem