import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Notes = ({ notes, setNotes }) => {

    const deleteHandler = (id) => {
        setNotes(prev => {

            let filtered = prev.filter((note) => note.id !== id);

            localStorage.setItem("notes",
                JSON.stringify(filtered)
            );
            return [...filtered];
        })
    }

    return (
        <>
            <TransitionGroup
                component='ul'
                className="List-group">
                {notes.map((note) => (
                    <CSSTransition
                        classNames={'note'}
                        key={note.id}
                        timeout={800}
                    >

                        <li
                            className="list-group-item note"

                        >
                            <div>
                                <strong>{note.title}</strong>
                                <small>{new Date().toLocaleDateString()}</small>
                            </div>

                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={event => deleteHandler(note.id)}
                            >
                                &times;
                            </button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
}

export default Notes;