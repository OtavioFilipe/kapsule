import React from 'react';
import Card from '../../components/molecules/card';
import AppTemplate from '../../components/template/app-template';

import * as Component from './styles';

const HomeScreen: React.FC = () => {
  return (
    <AppTemplate>
      <Component.Title>Best products</Component.Title>
      <Component.SubTitle>
        From a base of <Component.SB>3456 products</Component.SB>
      </Component.SubTitle>
      <Card />
    </AppTemplate>
  );
};

export default HomeScreen;
