import {useForm} from "react-hook-form"


const EditUserForm = ({currentUser, UpdateUser}) => {
    const initialFormState = { id: null, name: '', username: '' };
    //input con hook form
    const {register,formState:{errors},handleSubmit,setValue}=useForm({
        defaultValues: currentUser ? currentUser : initialFormState,
    });
    
    setTimeout(() => {
        setValue('name', currentUser ? currentUser.name : ''); // para arreglar el problemas de que no actualiza el input en pantalla si le doy avarias veces a editar a usuarios distintos
    }, 10); 

    setTimeout(() => {
        setValue('username', currentUser ? currentUser.username : '');   
    }, 10);
       
    const onSubmit= (data,e) =>{
        console.log(data)
        data.id=currentUser.id
        e.preventDefault();
        e.target.reset();
        UpdateUser(currentUser.id,data)
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input name="name" type="text"          
            {...register("name",{
                required:{value:true, message:"Campo obligatorio"}
            })}
            />
            <div>
                {errors.name?.message}
            </div>
            <label>Username</label>
            <input name="username" type="text"            
            {...register("username",{
                required:{value:true, message:"Campo obligatorio"}
            })}
            />
            <div>
                {errors.username?.message}
            </div>
            <button type="submit">Update user</button>
        </form>
);
}
 
export default EditUserForm;