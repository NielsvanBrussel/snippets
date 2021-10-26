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


    async function getSnippets() {
      try {
        const res = await axios.get('/api/snippets/all')
               
        dispatch({
          type: 'GET_SNIPPETS',
          payload: res.data
        })
      } catch (error) {
        dispatch({
          type: 'SNIPPETS_ERROR',
          payload: error.response.data.error
        })
        
      }}
  
    async function deleteSnippet(_id) {
      try {
        await axios.delete(`/api/snippets/delete/${_id}`)
  
        dispatch({
          type: 'DELETE_SNIPPET',
          payload: _id
          })
        
      } catch (error) {
        dispatch({
          type: 'SNIPPET_ERROR',
          payload: error.response.data.error
        })
      }
  
    }

    async function updateSnippet(updatedSnippet) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        const res = await axios.post(`/api/snippets/update/${updatedSnippet._id}`, updatedSnippet, config)
        console.log(res.data)
  
        dispatch({
          type: 'UPDATE_SNIPPET',
          payload: res.data
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
        const res = await axios.post('/api/snippets/create', newSnippet, config)
  
        dispatch({
          type: 'ADD_SNIPPET',
          payload: res.data
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
          snippets: state.snippets,
          error: state.error,
          loading: state.loading,
          save: save,
          saveSnippet,
          getSnippets,
          deleteSnippet,
          updateSnippet,
          addSnippet
        }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  