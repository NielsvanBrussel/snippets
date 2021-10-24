const AppReducer = (state, action) => {
    switch(action.type) {
        case 'GET_SNIPPETS':
            return {
                ...state,
                loading: false,
                snippets: action.payload
            }
        case 'SNIPPET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_SNIPPET':
            return {
                ...state,
                snippets: state.snippets.filter(snippet => snippet._id !== action.payload)
            }
        case 'ADD_SNIPPET':
            return {
                ...state,
                snippets: [action.payload, ...state.snippets]
            }
        default:
            return state
    }
}

export default AppReducer
