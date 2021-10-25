import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalState"

const SnippetTease = (snippet) => {

    const { deleteSnippet } = useContext(GlobalContext)
    const data = snippet.snippet
    const fullSnippet = `<html><body>${data.html}</body><style>${data.css}</style><script>${data.javaS}</script></html>`

    const deleteItem = () => {
        deleteSnippet(data._id)
    }

    return (

        <div className="snippet__tease">
            <button onClick={deleteItem}>delete</button>
            <h2>{data.name}</h2>
            <p>{data._id}</p>
            <iframe
                    className="iframe__tease"
                    srcDoc={fullSnippet}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    height="100%"
                    width="99%"
            />
        </div>
    )
}

export default SnippetTease
