import React from 'react'

const Button = (props) => {
    const {children, type, onClick, className} = props
  return (
    <div>
      <button className={className}
      type={type}
      onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
