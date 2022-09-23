import React from 'react';
import {Image} from 'react-native';

import * as Component from './styles';

const Card: React.FC = () => {
  return (
    <Component.Container>
      <Component.CardTop>
        <Component.ChipIcon colors={['#3135C6', '#00AAFF']}>
          <Image source={require('../../../assets/iconsCard/star.png')} />
        </Component.ChipIcon>
        <Component.ChipIconDefault>
          <Image
            source={require('../../../assets/iconsCard/exclamation.png')}
          />
        </Component.ChipIconDefault>
        <Component.Capsule>
          <Image source={require('../../../assets/iconsCard/capsule.png')} />
          <Component.Title> 30</Component.Title>
        </Component.Capsule>
      </Component.CardTop>
      <Component.CardContent>
        <Component.Content>
          <Component.CardTitle>
            Valdispert Mélatonine 1,9 mg{' '}
          </Component.CardTitle>
          <Component.SubTitle>Votré compatibilité 90/100</Component.SubTitle>
        </Component.Content>
        <Component.ProductImage>
          <Image source={require('../../../assets/images/product.png')} />
        </Component.ProductImage>
      </Component.CardContent>
    </Component.Container>
  );
};

export default Card;
