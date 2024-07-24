import React from 'react'

interface ComponentProps {
  children: string
  onClick: any
  type: 'submit' | 'reset' | 'button'
  className: string
}

const Button: React.FC<ComponentProps> = ({children, onClick, type, className}) => {
    return (
      <button 
      type={type} 
      onClick={onClick} 
      className={`border text-xl w-1/2 mx-auto font-semibold rounded-lg text-white p-2 ${className}`} 
      >
        {children}
      </button>
    );
  };
  
  export default Button;