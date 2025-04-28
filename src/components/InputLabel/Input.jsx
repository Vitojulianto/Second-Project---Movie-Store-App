import React from 'react'

const Input = ({ type, name, placeholder, ...rest }, ref) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        className="input input-bordered w-full mt-1"
        {...rest} // ini bisa include onChange, value, dll
      />
    );
  };

export default Input
