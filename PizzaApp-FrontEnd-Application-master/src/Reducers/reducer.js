import React from 'react';
let intialState={
    'auth':false,
    'id':null,
    'user':null,
}

const reducer=(state={...intialState},action)=> {
    console.log(state);
        switch(action.type){
            case 'SET_LOGIN':
                console.log(action.id)
                return state={
                    ...intialState,
                    auth:true,
                    id:action.id,
                    user:action.user
                }
                case 'SET_LOGOUT':
                    return state={
                        ...intialState,
                        auth:false,
                        id:null,
                        user:null,
                    }
                default:
                    return state;
        }
    
}

export default reducer;