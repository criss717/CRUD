import UserTable from "./components/UserTable";
import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import Formuser from "./components/Form";
import EditUserForm from "./components/EditUserForm"

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users, setUsers] = useState(usersData)

  //agregar user
  const addUser = (user) => {    
    user.id=uuidv4()
    setUsers([...users,user])   
  }

  //eliminar user
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter((user)=> user.id!==id))
  }

  // Editar usarios
  const[stateEdit,setStateEdit]= useState(false) // cuando se da al boton edit se cambia a true
  
  const[currentUser,setCurrentUser]= useState({  //usuario actual para editar
    id:null, name:"",username:""
  })

  const editUser = (user)=> {
    console.log(user)
    setStateEdit(true) // pasdamos a pantalla de editar 
    setCurrentUser({
      id:user.id,
      name:user.name,
      username:user.username
    })      
    
  }
  
  const UpdateUser = (id,userUpdate) =>{ // para el boton de update cuando se esta editando
    setStateEdit(false) // volvemos apantalla de añadir user nuevo
    setUsers(users.map((user)=> (user.id===id)? userUpdate : user))// cuando encuentra el id q esta editando , lo actualiza con el nuevo dato enviado, siuno sigue recorriendo el array
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
      { 
        stateEdit? ( // preguntamos si pintamos la pamntalla de editar o añadir
          <div className="flex-large">
            <h2>Edit user</h2>          
            <EditUserForm 
            currentUser={currentUser} 
            UpdateUser={UpdateUser}/>          
          </div>
        ):( 
            <div className="flex-large">
              <h2>Add user</h2>          
              <Formuser addUser={addUser}/>           
            </div>
         )
      }
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable 
          ussers={users}
          deleteUser={deleteUser}          
          editUser={editUser}
        />
      </div>
    </div>
  </div>
  );
}

export default App;
