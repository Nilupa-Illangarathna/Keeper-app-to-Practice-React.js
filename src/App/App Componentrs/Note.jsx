import React from "react"


function Note(params){
    return  <div className="note">
                <h1>{params.topic}</h1>
                <p>{params.content}</p>
            </div>
}


function createNote(NoteItem){
    return <Note 
    key = {NoteItem.key} 
    topic = {NoteItem.topic}
    content = {NoteItem.content}/>
}


export default createNote;

