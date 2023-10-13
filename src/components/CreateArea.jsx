import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [isExpanded,setIsExpanded]=useState(false)

function expand(){
    setIsExpanded(true)
}

function fold(){
    setIsExpanded(false)
}

   const [note,setNote]=useState({
    title:"",
    content:""
   })

   function handleChange(event){
    const {name,value}=event.target;

    setNote(prevNote=>{
        return {...prevNote,
        [name]:value}
    })
   }
   function submitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
   }

   


  return (
    <div>
      <form className="create-note">
        {isExpanded&&<input name="title" placeholder="Title" value={note.title}  onChange={handleChange}/>}
        <textarea onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} value={note.content} onChange={handleChange}/>
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
