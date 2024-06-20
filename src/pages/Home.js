import React, { Fragment, useState } from "react";
import Form from "../components/Form";
import Notes from  "../components/Notes";

const Home = () => {


    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    
    return(
        <Fragment>
            <Form setNotes={setNotes} notes={notes} />

            <hr/>

            {notes.length ? <Notes notes={notes} setNotes={setNotes}/>  : ''}
        </Fragment>
    )
}
export default Home;