const initialState=0

const changeTheNumber=(state=initialState,action)=>{
    const validation=(state)=>{
        if(state==0){
            return state=0
        }
        else{
           return state-1
        }
    }
    switch(action.type){
        case'INCREMENT':return state+1
        case 'DECREMENT':return (validation(state))
        default:return state
    }
}
export default changeTheNumber