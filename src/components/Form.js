import React, { useState, useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Form = ({ setNotes, notes }) => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            alert.show('Заметка создана', 'success');

            setNotes(
                prev => {
                    const newNotes = [...prev, { title: value, date: new Date().toLocaleString(), id: prev.length }]
                    localStorage.setItem('notes', JSON.stringify(newNotes));
                    return newNotes;
                }
            );

            setValue('');
        } else {
            alert.show(' Введите название заметки', 'danger');

        }
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Введите название заметки"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </div>
            </form>
        </>
    );
}
export default Form;