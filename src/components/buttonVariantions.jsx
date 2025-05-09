import React from 'react';
import Button from './button';

function MyButtons({ buttonToShow }) { // Add buttonToShow prop
  const handleClick = (buttonName) => {
    console.log(`Button "${buttonName}" clicked!`);
    // Add your button-specific logic here
  };

  const buttons = [
    { name: 'createBox', text: 'CREATE A BOX' },
    { name: 'login', text: 'LOGIN' },
    { name: 'signup', text: 'SIGN UP' },
    { name: 'search', text: 'SEARCH' },
    { name: 'updateBox', text: 'UPDATE BOX' },
    { name: 'deleteBox', text: 'DELETE BOX', isSecondary: true },
    { name: 'yes', text: 'YES' },
    { name: 'no', text: 'NO', isSecondary: true },
    { name: 'addItem', text: 'ADD A ITEM' },
    { name: 'extraButton', text: 'Extra BUTTON' },
  ];

  const buttonToRender = buttons.find(button => button.name === buttonToShow);

  return (
    <div>
      {buttonToRender && (
        <Button
          key={buttonToRender.name}
          text={buttonToRender.text}
          onClick={handleClick}
          name={buttonToRender.name}
          isSecondary={buttonToRender.isSecondary}
        />
      )}
    </div>
  );
}

export default MyButtons;