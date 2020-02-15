const initState = {
    page: 1,
    list: []
}
export  const messageList=(state=initState,action)=>{
    switch(action.type){
        case 'INIT_MESSAGE_LIST':{
            const result = {...state, ...action.data};
            return result
        }
        case 'UPFATE_MESSAGE_LIST':{
            const result = {...state, ...action.data};
            return result
        }
        default: 
        return state
    }
}