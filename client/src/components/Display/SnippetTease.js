import React from 'react'

const SnippetTease = (snippet) => {
    
    const data = snippet.snippet
    const fullSnippet = `<html><body>${data.html}</body><style>${data.css}</style><script>${data.javaS}</script></html>`


    return (

        <div className="snippet__tease">
            <h2>{data.name}</h2>
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
