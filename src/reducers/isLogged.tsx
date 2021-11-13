interface isLoggedAction{
    action:'LOGIN' | 'LOGOUT',
    type:string,
}
const isLoggedReducer = (state:Boolean=false, action: isLoggedAction) => {
    switch (action.type) {
        case 'LOGIN':
            return state = true;
        case 'LOGOUT':
            return state = false;
        default :
        return state;
    }
}
export default isLoggedReducer;