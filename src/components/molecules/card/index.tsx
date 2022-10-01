import React from 'react';
import {Image} from 'react-native';
import Button from '../../atoms/button';
import ContentCard, {ContentCardProps} from '../content-card';

import * as Component from './styles';

interface CardProps extends ContentCardProps {
  title: string;
  subTitle: string;
  image: any;
  handleProgress: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  subTitle,
  handleProgress,
  contentCardData,
}) => {
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
          <Component.CardTitle>{title}</Component.CardTitle>
          <Component.SubTitle>{subTitle}</Component.SubTitle>
        </Component.Content>
        <Component.ProductImage>
          <Image source={image} />
        </Component.ProductImage>
      </Component.CardContent>
      <ContentCard contentCardData={contentCardData} />
      <Button
        onPress={handleProgress}
        text="18€99"
        icon={require('../../../assets/icons/plusIcon.png')}
      />
    </Component.Container>
  );
};

export default Card;
