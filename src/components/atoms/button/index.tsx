import React from 'react';

import * as Component from './styles';

interface ButtonProps {
  text: string;
  icon?: any;
  onPress?: any;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({text, icon, ...rest}) => {
  return (
    <Component.Container {...rest}>
      <Component.Title>{text}</Component.Title>
      {icon && <Component.Icon source={icon} />}
    </Component.Container>
  );
};

export default Button;
