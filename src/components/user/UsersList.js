import React from 'react'
import UsersItem from './UsersItem'

const UsersList = ({users_array}) => {
  return (
    <div className='grid grid-cols-4 gap-3 mx-auto container'>
        {users_array && users_array.map((value, index)=>{
            return <UsersItem key={index} usersData={value}  />
        })}
    </div>
  )
}

export default UsersList