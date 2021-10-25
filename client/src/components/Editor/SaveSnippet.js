import React, { useState, useContext } from 'react'
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuidv4 } from 'uuid';

const SaveSnippet = ({ html, javaS, css }) => {

    const { saveSnippet, addSnippet } = useContext(GlobalContext)
    

    const [snippetName, setSnippetName] = useState("")
    const onSubmit = e => {
        e.preventDefault()
        if (snippetName === "") {

        }
        else {
            const newSnippet = {
                id: uuidv4(),
                html: html,
                javaS: javaS,
                css: css,
                name: snippetName
            }
            addSnippet(newSnippet)
            saveSnippet()
        }
    }


    return (
        <div className="savesnippet__popup">
            <div className="savesnippet__popuptext">
                <button className="savesnippet__popuptext__close" onClick={saveSnippet}>X</button>
                <div className="savesnippet__popuptext__inner">
                    <div className="savesnippet__popuptext__title">
                        <h1>Save snippet</h1>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-control">
                            <label htmlFor="text">Name your snippet:</label>
                            <input type="text" value={snippetName}  onChange={(e) => setSnippetName(e.target.value)} placeholder="Enter name..." />
                        </div>
                        <button className="btn">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SaveSnippet
