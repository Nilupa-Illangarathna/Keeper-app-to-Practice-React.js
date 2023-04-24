import React from "react";
import Footer from "./App Componentrs/Footer.jsx"
import Header from "./App Componentrs/Header.jsx"
import createNote from "./App Componentrs/Note.jsx";
import notesList from "./Data/NoteList.js"




function App(){
    return <div>
        <Header/>
        {notesList.map(createNote)}
        <Footer/>
    </div>
}

export default App;


