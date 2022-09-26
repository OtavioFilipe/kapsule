import React from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/molecules/card';
import AppTemplate from '../../components/template/app-template';

import {CircularProgress} from 'react-native-circular-gradient-progress';

import * as Component from './styles';

const HomeScreen: React.FC = () => {
  const data = [
    {
      id: 1,
      title: 'Valdispert Mélatonine 1,9 mg',
      subTitle: 'Votré compatibilité 90/100',
      image: require('../../assets/images/product.png'),
    },
    {
      id: 2,
      title: 'Dipirona',
      subTitle: 'Votré compatibilité 90/100',
      image: require('../../assets/images/product.png'),
    },
    {
      id: 3,
      title: 'Losatarna',
      subTitle: 'Votré compatibilité 90/100',
      image: require('../../assets/images/product.png'),
    },
  ];

  return (
    <AppTemplate>
      <Component.Title>Best products</Component.Title>
      <Component.SubTitle>
        From a base of <Component.SB>3456 products</Component.SB>
      </Component.SubTitle>
      <FlatList
        style={{width: '100%'}}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <CircularProgress color="#F00" size={14} progress={1} />
    </AppTemplate>
  );
};

export default HomeScreen;
