import React, { Fragment } from 'react'

const UserTable = ({ussers,deleteUser,editUser}) => {
   
    return (
        <Fragment>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {ussers.length>0 ? 
                    ussers.map(item=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>
                            <button onClick={()=>{editUser(item)}
                            } className="button muted-button">Edit</button>
                            <button onClick={()=>deleteUser(item.id)} className="button muted-button">Delete</button>
                            </td>
                        </tr>
                     )) :(  
                        <td colSpan={3}>No hay users</td>
                     )                        
                    }   
                    </tbody>
                 </table>            
            
        </Fragment>         
    
    );    
    }
export default UserTable