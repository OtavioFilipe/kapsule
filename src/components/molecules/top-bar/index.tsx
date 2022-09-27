import React from 'react';
import {Image} from 'react-native';
import Chips from '../../atoms/chips';

import {GradientCircularProgress} from 'react-native-circular-gradient-progress';

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
          <Component.Circle>
            <GradientCircularProgress
              startColor="#2EFFAF"
              middleColor="#16D2D9"
              endColor="#00AAFF"
              size={45}
              progress={50}
            />
          </Component.Circle>
          <Image source={require('../../../assets/icons/shop-cart.png')} />
        </Component.Cart>
      </Component.RightSide>
    </Component.Container>
  );
};

export default TopBar;
