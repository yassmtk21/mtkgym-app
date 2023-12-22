import { createContext, useReducer } from "react";
import { initstate, ActionReducer } from "../menu/ActionReducer";


export const ActionContext = createContext();

export const ActionProvider = ({children})=>{
    const [state, dispatch] = useReducer(ActionReducer, initstate);
    return(
        <ActionContext.Provider value={{state, dispatch}}>
            {children}
        </ActionContext.Provider>
    )
}