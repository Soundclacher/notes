import React, {useReducer} from "react";
import AlertContext from "./alertContext";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import alertReducer from "./alertReducer";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false});
    
    function show(text, type = 'warning') {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        });
    }

    function hide() {
        dispatch({type: HIDE_ALERT})
    }

    return(
        <AlertContext.Provider value={{
            show, hide,
            alert:state
        }} >
            {children}
        </AlertContext.Provider>
    );
}
export default AlertState;

