import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes]=useState([])

  function addItem(note){
    setNotes(prevNote=>{
     return [...prevNote,note];
    })

  }

  function deleteNote(id){
    console.log("deleting note")
    setNotes(
      prevNotes=>{
        return prevNotes.filter((item,index)=>{
          return index!==id;
        })
      }
    )

  }



  return (
    <div>
      <Header />
      <CreateArea  onAdd={addItem}/>
      {notes.map((item,index)=><Note onDelete={deleteNote} id={index} key={index} title={item.title} content={item.content} />)}
      
      <Footer />
    </div>
  );
}

export default App;
