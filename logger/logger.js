export default function logger(reducer){
    return (prev_state,action,args)=>{
        console.group(action)
        console.log("prev_state: ",prev_state)
        console.log("args: ",args)

        const nextState =  reducer(prev_state,action,args) 
        console.log("next_state: ",nextState)
        console.groupEnd()
        return nextState
    }   
}