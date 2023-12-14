import React from 'react'

const Input = ({ className ,id, type, placeholder, value, onChange}) => {
  return (
        <div className="inputForm">
            <input 
            className={className}
            id={id}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            />
        </div>
  )
}

export default Input