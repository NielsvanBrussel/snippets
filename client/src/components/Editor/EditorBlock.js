import React from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material-ocean.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { Controlled as ControlledEditor } from 'react-codemirror2'

const EditorBlock = ({ displayName, language, value, onChange }) => {

    function handleChange(editor, data, value) {
        onChange(value)
    }
    return (
        <div className="editorblock-container">
            <div className="editorblock-title">
                {displayName}
                
            </div>

            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material-ocean',
                    lineNumbers: true
                }}
                className="code-mirror-wrapper"
            />

        </div>
    )
}

export default EditorBlock
