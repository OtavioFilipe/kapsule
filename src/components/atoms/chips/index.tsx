import React from 'react';

import * as Component from './styles';

interface ChipProps {
  quantity: number | string;
}

const Chips: React.FC<ChipProps> = ({quantity}) => {
  return (
    <Component.Container colors={['#2EFFAF', '#00AAFF']}>
      <Component.QuantityNumber>{quantity}</Component.QuantityNumber>
    </Component.Container>
  );
};

export default Chips;
