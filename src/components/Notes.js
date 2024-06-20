import React from "react";

const Notes = ({ notes, setNotes }) => {

    const deleteHandler = (id) =>  {
        setNotes(prev => {

            let filtered  =  prev.filter((note)  =>  note.id!== id);

            localStorage.setItem("notes", 
                JSON.stringify(filtered)
            );
            return [...filtered];
        })
    }

    return (
        <>
            <ul className="List-group">
                {notes.map((note) => (
                    <li
                        className="list-group-item note"
                        key={note.id}
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
                ))}
            </ul>
        </>
    );
}

export default Notes;