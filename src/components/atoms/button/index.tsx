import React from 'react';

import * as Component from './styles';

interface ButtonProps {
  text: string;
  icon: any;
}

const Button: React.FC<ButtonProps> = ({text, icon}) => {
  return (
    <Component.Container>
      <Component.Title>{text}</Component.Title>
      <Component.Icon source={icon} />
    </Component.Container>
  );
};

export default Button;
