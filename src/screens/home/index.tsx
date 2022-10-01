import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/molecules/card';
import Modal from '../../components/molecules/modal';
import Skeleton from '../../components/molecules/skeleton';
import AppTemplate from '../../components/template/app-template';
import {CartContext} from '../../context/cartProvider';
import {data} from '../../utils/mock-medications';

import * as Component from './styles';

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    count,
    handleUpdateCount,
    handleUpdateProgress,
    progress,
    setCount,
    setProgress,
  } = useContext(CartContext);

  function handleProgress() {
    if (count >= 4) {
      return;
    }
    if (progress >= 100) {
      setModalVisible(true);
    }
    handleUpdateCount();
    handleUpdateProgress();
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
                handleProgress={handleProgress}
                contentCardData={item.contentCardData}
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
        <Skeleton />
      )}
    </AppTemplate>
  );
};

export default HomeScreen;
