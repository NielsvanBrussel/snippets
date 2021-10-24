import React, { useState, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";


const initialState = {
    snippets: [],
    error: null,
    loading: true
  };

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [save, setSave] = useState(false)

    const saveSnippet = () => {
        setSave(prevSave => !prevSave )
    }


    async function getSnippets(){
      try {
        const res = await axios.get('/api/v1/snippets')
        
        dispatch({
          type: 'GET_SNIPPETS',
          payload: res.data.data
        })
      } catch (error) {
        dispatch({
          type: 'SNIPPETS_ERROR',
          payload: error.response.data.error
        })
        
      }}
  
    async function deleteSnippet(id) {
      try {
        await axios.delete(`/api/v1/snippets/${id}`)
  
        dispatch({
          type: 'DELETE_SNIPPETS',
          payload: id
          })
        
      } catch (error) {
        dispatch({
          type: 'SNIPPET_ERROR',
          payload: error.response.data.error
        })
      }
  
    }
  
    async function addSnippet(newSnippet) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      try {
        const res = await axios.post('/api/v1/snippets', newSnippet, config)
  
        dispatch({
          type: 'ADD_SNIPPET',
          payload: res.data.data
        })
  
      } catch (error) {
  
        dispatch({
          type: 'SNIPPET_ERROR',
          payload: error.response.data.error
        })
      }
    }
    
  
    return (
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          error: state.error,
          loading: state.loading,
          save: save,
          saveSnippet,
          getSnippets,
          deleteSnippet,
          addSnippet
        }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  