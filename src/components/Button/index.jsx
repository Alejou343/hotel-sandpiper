const Button = ({children, onClick, type}) => {
    return (
      <button 
      type={type} 
      onClick={onClick} 
      className="bg-blue-500 border text-xl w-1/2 mx-auto font-semibold rounded-lg text-white" 
      >
        {children}
      </button>
    );
  };
  
  export default Button;