import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import { CSSTransition } from 'react-transition-group';

const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    // if (!alert.visible) {
    //     return null;
    // }
    return (

        <CSSTransition
            in={alert.visible}
            timeout={750}
            classNames={'alert'}
            mountOnEnter={false}
            unmountOnExit={true}
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание!</strong>
                {alert.text}
                <button
                    onClick={hide}
                    type="button btn-sm"
                    className="close"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>

    );
}

export default Alert;