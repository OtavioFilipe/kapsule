import React from 'react';
import {Image} from 'react-native';
import Chips from '../../atoms/chips';

import * as Component from './styles';

const TopBar: React.FC = () => {
  return (
    <Component.Container colors={['#3135C6', '#00AAFF']}>
      <Component.LeftSide>
        <Image
          style={{width: 114, height: 27.12}}
          source={require('../../../assets/logo.png')}
        />
      </Component.LeftSide>
      <Component.RightSide>
        <Chips />
        <Component.Cart style={{marginLeft: 4}}>
          <Image source={require('../../../assets/icons/shop-cart.png')} />
        </Component.Cart>
      </Component.RightSide>
    </Component.Container>
  );
};

export default TopBar;
