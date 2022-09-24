import React from 'react';
import {Image, View} from 'react-native';
import Chips from '../../atoms/chips';

import * as Component from './styles';

const ContentCard: React.FC = () => {
  const data = [
    {
      id: 1,
      title: 'Health Goals',
      subTitle: 'Améliorer les performances',
      icon: require('../../../assets/iconsCard/medal.png'),
    },
    {
      id: 2,
      title: 'Symptoms',
      subTitle: 'Mémorie',
      icon: require('../../../assets/iconsCard/brain.png'),
    },
  ];
  return (
    <Component.Container>
      {data.map(row => (
        <Component.ContentRow key={row.id}>
          <Component.ContentRowLeft>
            <View style={{flexDirection: 'row'}}>
              <Component.Title>{row.title}</Component.Title>
              <Chips />
            </View>
            <Component.SubTitle>{row.subTitle}</Component.SubTitle>
          </Component.ContentRowLeft>
          <Component.ContentRowRight>
            <Component.Circle>
              <Image source={row.icon} />
            </Component.Circle>
          </Component.ContentRowRight>
        </Component.ContentRow>
      ))}
    </Component.Container>
  );
};

export default ContentCard;
