import React from 'react';

import * as Component from './styles';

const Chips: React.FC = () => {
  return (
    <Component.Container colors={['#2EFFAF', '#00AAFF']}>
      <Component.QuantityNumber>3</Component.QuantityNumber>
    </Component.Container>
  );
};

export default Chips;
