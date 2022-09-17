export const isEmailValid=(email)=>{

    const regexExp = /^[a-zA-Z0-9]+?@[A-Za-z\.]+?\.[a-z]+?$/gm
    const isValid = regexExp.test(email);
    console.log(isValid);
    return isValid;
}

export const isPasswordValid=(password)=>{
    
    const regexExp = /^[\w@!#$%^&*(),/\\\]\}\[\{\.\-\+\*`~]{8,}?$/gm
    const isValid = regexExp.test(password);
    return isValid;
}

