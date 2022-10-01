import React, {useContext} from 'react';
import {CartContext} from '../../../context/cartProvider';
import TopBar from '../../molecules/top-bar';

import * as Component from './styles';

const AppTemplate = ({children}: any) => {
  const {count, progress} = useContext(CartContext);

  return (
    <Component.Container>
      <TopBar countChip={count} progress={progress} />
      <Component.Content>{children}</Component.Content>
    </Component.Container>
  );
};

export default AppTemplate;
