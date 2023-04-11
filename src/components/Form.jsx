import {useForm} from "react-hook-form"

const Formuser = ({addUser}) => {

    //input con hook form
    const {register,formState:{errors},handleSubmit}=useForm();

    const onSubmit= (data,e) =>{
        console.log(data)
        e.preventDefault();
        e.target.reset();
        addUser(data)
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
            <button type="submit">Add new user</button>
        </form>
);
}
 
export default Formuser;