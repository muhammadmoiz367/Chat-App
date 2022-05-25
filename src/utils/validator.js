export const isEmpty=(str)=>{
    if(str===null || str===undefined || str===""){
        return true;
    }
    return false;
}

export const isValidField=(str, len, name)=>{
    if(isEmpty(str)){
        return `${name} is required`;
    }
    if(str.length<len){
        return `${name} must be at least ${len} characters`;
    }       
    return null;
}

export const isEmail=(email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
