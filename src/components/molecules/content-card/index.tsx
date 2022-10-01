import React from 'react';
import {Image, View} from 'react-native';
import Chips from '../../atoms/chips';

import {GradientCircularProgress} from 'react-native-circular-gradient-progress';

import * as Component from './styles';

export interface ContentCardProps {
  contentCardData: any[];
}

const ContentCard: React.FC<ContentCardProps> = ({contentCardData}) => {
  return (
    <Component.Container>
      {contentCardData.map(row => (
        <Component.ContentRow key={row.id}>
          <Component.ContentRowLeft>
            <View style={{flexDirection: 'row'}}>
              <Component.Title>{row.title}</Component.Title>
              <Chips quantity={3} />
            </View>
            <Component.SubTitle>{row.subTitle}</Component.SubTitle>
          </Component.ContentRowLeft>
          <Component.ContentRowRight>
            <Component.Circle>
              <Image source={row.icon} />
            </Component.Circle>
            <GradientCircularProgress
              startColor="#2EFFAF"
              middleColor="#16D2D9"
              endColor="#00AAFF"
              size={45}
              progress={50}
            />
          </Component.ContentRowRight>
        </Component.ContentRow>
      ))}
    </Component.Container>
  );
};

export default ContentCard;
