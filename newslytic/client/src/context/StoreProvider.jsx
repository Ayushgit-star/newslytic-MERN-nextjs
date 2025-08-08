import React, { useReducer } from 'react'
// Import the reducer function that will handle state updates
import storeReducer from './storeReducer'
// Import the context object to provide and consume global state
import storeContext from './storeContext'

import decode_token from '../utils/index' // For decoding JWT tokens

// StoreProvider is a component that will wrap your app and provide global state
const StoreProvider = ({ children }) => {
    // useReducer sets up state management for the app
    // - store: the current state object
    // - dispatch: function to update state by sending actions
    const [store, dispatch] = useReducer(storeReducer, {

        userInfo: decode_token(localStorage.getItem('newsToken')), // Decoded user info from token
        
        token: localStorage.getItem('newsToken') || "" // Initialize token from localStorage if available
    })

    // The Provider makes store and dispatch available to all child components
    return (
        <storeContext.Provider value={{ store, dispatch }}>
            {children} {/* Render all child components inside the provider */}
        </storeContext.Provider>
    )
}

// Export the provider so it can be used to wrap the app in main.jsx
export default StoreProvider