export default function(userData){
    const errors = {};
    
    const regexEmail =/\S+@\S+\.\S+/ 
    const regexPassword = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$/gm
    
    if(!regexEmail.test(userData.username)) errors.username = "Username must be a valid email"
    
    if(userData.username === "") errors.username = "Username cannot be empty"
    
    if(userData.username.length > 35) errors.username = "Username cannot be longer than 35 characters"

    if(!regexPassword.test(userData.password)) {
        errors.password = "Must be between 6 and 10 characters long"
    }

    return errors;
}