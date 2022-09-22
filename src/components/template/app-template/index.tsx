import React from 'react';
import TopBar from '../../molecules/top-bar';

import * as Component from './styles';

const AppTemplate = ({children}: any) => {
  return (
    <Component.Container>
      <TopBar />
      <Component.Content>{children}</Component.Content>
    </Component.Container>
  );
};

export default AppTemplate;
