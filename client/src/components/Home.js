import React, { useEffect, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import SnippetTease from './Display/SnippetTease'


const Home = () => {

    const { getSnippets, snippets } = useContext(GlobalContext)
    
    useEffect(() => {
            getSnippets()
      }, [])


   
    return (
        <div>
            <div className="snippets__display__grid">
                {snippets.map(snippet => (
                    <SnippetTease key={snippet.id} snippet={snippet}></SnippetTease>
                ))}
            </div>          
        </div>
    )
}

export default Home

