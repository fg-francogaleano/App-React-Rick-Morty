import React from "react";
import styles from "./Form.module.css"
import validation from "./validation";


export default function Form(props){
    const [userData, setUserData] = React.useState({ 
        username: '',
        password: '' 
    });
    
    const [errors, setErrors] = React.useState({ 
        username: '',
        password: '' 
    });
    
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({
            ...userData,
            [property] : value
        });

        setErrors(
            validation({
                ...userData,
            [property] : value
            })
        );

        console.log(errors);
    }
    
    const handleSubmit = () => {
        props.login(userData);
    }
    

    return(
        <div className={styles.contenedor}>
            
            <form onSubmit={handleSubmit}>
                   
                <div>
                    <input 
                    type="text" 
                    name="username" 
                    placeholder=" " 
                    onChange={handleInputChange}
                    value={userData.username}
                    className={styles.input}
                    id="user"/>
                    
                    <label className={styles.label} for="user">Username</label>
                </div>
                
                <span className={styles.errors}> 
                    {errors.username ? errors.username : null}
                </span>            
                    
                <div>
                    <input 
                    type="password" 
                    name="password" 
                    placeholder=" " 
                    onChange={handleInputChange}
                    value={userData.password}
                    className={styles.input}
                    id="password"/>
                    
                    <label className={styles.label} for="password">Password</label>
                </div>
                
                {/* <span className={styles.errors}> 
                    {errors.password ? errors.password : null}
                </span>         */}
                    
                <div>
                    <button type="submit">LOGIN</button>
                </div>

            </form>
            
        </div>
    )
}