import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Card from '../../components/molecules/card';
import AppTemplate from '../../components/template/app-template';

import Modal from '../../components/molecules/modal';

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
      title: 'Valdispert Mélatonine 1,9 mg',
      subTitle: 'Votré compatibilité 90/100',
      image: require('../../assets/images/product.png'),
    },
    {
      id: 3,
      title: 'Valdispert Mélatonine 1,9 mg',
      subTitle: 'Votré compatibilité 90/100',
      image: require('../../assets/images/product.png'),
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const [progress, setprogress] = useState(25);

  function handleProgress() {
    setprogress(progress + 25);
    if (progress >= 100) {
      setModalVisible(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <AppTemplate>
      {loading ? (
        <>
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
                progress={progress}
                handleProgress={handleProgress}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </>
      ) : (
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row', alignItems: 'center', left: 16}}>
            <View
              style={{
                position: 'absolute',
                width: 104,
                height: 11,
                top: 32,
                backgroundColor: '#545976',
                borderRadius: 25,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', left: 16}}>
            <View
              style={{
                position: 'absolute',
                width: 104,
                height: 11,
                top: 62,
                backgroundColor: '#545976',
                borderRadius: 25,
              }}
            />
          </View>
        </SkeletonPlaceholder>
      )}
    </AppTemplate>
  );
};

export default HomeScreen;
