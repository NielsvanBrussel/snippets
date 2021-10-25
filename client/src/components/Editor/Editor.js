import React, { useState, useEffect, useContext } from 'react'
import EditorBlock from './EditorBlock'
import SaveSnippet from './SaveSnippet'
import { GlobalContext } from '../../context/GlobalState'

const Editor = () => {

    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [javaS, setJavaS] = useState("")
    const [snippet, setSnippet] = useState("")

    const { saveSnippet, save } = useContext(GlobalContext)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSnippet( 
                `<html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javaS}</script>
                </html>`
            )
        }, 500)

        return () => clearTimeout(timeout)
    }, [html, css, javaS])

   


    return (
        <>
            <div className="editor__dashboard">
                <button onClick={saveSnippet}>SAVE</button>
                <button>REFRESH</button>
            </div>
            <div className="top_editor top_editor__grid">
                <div className="top_editor_block top_editor_block__grid-item">
                    <EditorBlock 
                        language="xml"
                        displayName="HTML"
                        value={html}
                        onChange={setHtml}
                    />
                </div>
                <div className="top_editor_block top_editor_block__grid-item">
                    <EditorBlock 
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                    />
                </div>
                <div className="top_editor_block top_editor_block__grid-item">
                    <EditorBlock 
                    language="javascript"
                    displayName="JAVASCRIPT"
                    value={javaS}
                    onChange={setJavaS}
                    />
                </div>
            </div>

            <div className="bottom_editor">
                <iframe
                    className="iframe__editor"
                    srcDoc={snippet}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    height="100%"
                    width="99%"
                />
            </div>
            {save === true && <SaveSnippet html={html} javaS={javaS} css={css} />}
        </>
    )
}

export default Editor
