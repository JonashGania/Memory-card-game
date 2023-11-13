import React from 'react'
import "../styles/loadingScreen.css"

export default function LoadingScreen() {
  return (
    <div className='loading-screen'>
        <img 
            src="/loading.gif" 
            alt="loading gif"
            className='loading-gif' 
        />
        <b>Loading...</b>
    </div>
  )
}
