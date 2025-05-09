import React from 'react';


function Button({ text, onClick, name, isSecondary = false }) { // Added isSecondary prop
  const mainColor = '#FF553E';
  const mouseoverColor = '#FF7663';
  const onclickColor = '#FF7360';
  const secondaryColor = '#4D4C4C';

  const baseStyles = {
    backgroundColor: isSecondary ? secondaryColor : mainColor, // Use secondaryColor if isSecondary is true
    color: 'white',
    display: 'flex', // Enable flexbox for centering
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
    width: '17.8rem',
    padding: '1.5rem 2rem',
    gap: '0.625rem',
    //padding: '10px 15px',
    border: 'none',
    borderRadius: '40px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const currentStyle = {
    ...baseStyles,
    backgroundColor: isActive
      ? onclickColor
      : isHovered
      ? mouseoverColor
      : baseStyles.backgroundColor,
  };

  return (
    <button
      style={currentStyle}
      onClick={() => onClick(name)}
      name={name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {text}
    </button>
  );
}

export default Button;