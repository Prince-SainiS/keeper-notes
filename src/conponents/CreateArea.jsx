import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';




function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function addNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function expanded() {
        setExpanded(true)
    }



    return <form className='create-note'>
        {isExpanded ? <input
            onChange={handleChange}
            type="text"
            placeholder='title'
            name="title"
            value={note.title}
        /> : null
        }


        <textarea
            onChange={handleChange}
            onClick={expanded}
            placeholder='content'
            name='content'
            value={note.content}
            rows={isExpanded ? 3 : 1}
        >
        </textarea>
        <Zoom in={isExpanded}>
            <Fab onClick={addNote}>
                <AddIcon />
            </Fab>
        </Zoom>

    </form>
}


export default CreateArea;