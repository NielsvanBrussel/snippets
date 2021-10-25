import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import SnippetTease from './Display/SnippetTease'


const Home = () => {

    const { getSnippets, snippets } = useContext(GlobalContext)
    
    useEffect(() => {
            getSnippets()
      }, [])



    const showSnippets = () => {
          console.log(snippets)
    }

   
    return (
        <div>
            <div className="snippets__display__grid">
                {snippets.map(snippet => (
                    <SnippetTease key={snippet.id} snippet={snippet}></SnippetTease>
                ))}
            </div>
          <button onClick={showSnippets}>show snippets</button>
        </div>
    )
}

export default Home

