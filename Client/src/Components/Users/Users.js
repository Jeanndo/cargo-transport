import React from 'react';

const Users = ({user})=>{
    return (
        
        <div className="created-user-container">
            <p><b>FirstName</b>:{user?.result?.name}</p>
            <p><b>FirstName</b>:{user?.result?.lastName}</p> 
            <p><b>Email</b>:{user?.result?.email}</p>
            <p><b>Password</b>:{user?.result?.password}</p>
        </div>
    )
}

export default Users;