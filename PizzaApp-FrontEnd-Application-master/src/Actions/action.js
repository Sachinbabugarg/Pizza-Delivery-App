export const setLogin= (token,user) =>{
    return{
        type:'SET_LOGIN',
        id:token,
        user
    }

}



export const setLogout= () =>{
    return{
        type:'SET_LOGOUT',
    }

}
