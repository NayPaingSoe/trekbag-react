import React from 'react'

export default function Button({ type,children, onClick}) {
  return (
    <button onClick={onClick} className={`btn ${type==='secondary' ? 'btn-secondary' : ''}`}> 
      {children}
    </button>
  )
}
 