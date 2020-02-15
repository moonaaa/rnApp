export function setMessageList(data){
    return {
        type: 'INIT_MESSAGE_LIST',
        data
    }
}

export function updateMessageList(data){
    return {
        type: 'UPFATE_MESSAGE_LIST',
        data
    }
}