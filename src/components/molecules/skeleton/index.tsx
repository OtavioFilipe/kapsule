import React, {useEffect} from 'react';
import {Animated, View} from 'react-native';

// import { Container } from './styles';

const Skeleton: React.FC = () => {
  const AnimatedValue = new Animated.Value(0);

  useEffect(() => {
    circleAnimated();

    return () => circleAnimated();
  }, []);

  const circleAnimated = () => {
    AnimatedValue.setValue(0);
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        circleAnimated();
      }, 1000);
    });
  };

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 100],
  });

  const translateX2 = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 300],
  });

  const translateX3 = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 45],
  });

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: 104,
          height: 11,
          left: 16,
          marginBottom: 19,
          backgroundColor: '#545976',
          opacity: 0.3,
          borderRadius: 25,
        }}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.5,
            backgroundColor: '#FFF',
            transform: [{translateX: translateX2}],
          }}></Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 104,
          height: 11,
          left: 16,
          marginBottom: 22,
          backgroundColor: '#545976',
          opacity: 0.3,
          borderRadius: 25,
        }}>
        <View
          style={{
            width: 104,
            height: 11,
            left: 120,
            marginBottom: 22,
            backgroundColor: '#0AADFF',
            opacity: 0.3,
            borderRadius: 25,
          }}
        />
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.5,
            backgroundColor: '#FFF',
            transform: [{translateX: translateX2}],
          }}></Animated.View>
      </View>
      <View
        style={{
          width: 360,
          height: 340,
          backgroundColor: 'white',
          borderRadius: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            padding: 16,
          }}>
          {['', ''].map(item => (
            <View
              style={{
                width: 24,
                height: 24,
                marginRight: 6,
                borderRadius: 3,
                backgroundColor: '#F5F7FE',
              }}>
              <Animated.View
                style={{
                  width: '100%',
                  height: '100%',
                  opacity: 0.5,
                  backgroundColor: '#FFF',
                  transform: [{translateX: translateX3}],
                }}></Animated.View>
            </View>
          ))}
          <View
            style={{
              width: 45,
              height: 24,
              marginRight: 6,
              borderRadius: 3,
              backgroundColor: '#F5F7FE',
            }}>
            <Animated.View
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.5,
                backgroundColor: '#FFF',
                transform: [{translateX: translateX3}],
              }}></Animated.View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            padding: 16,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, marginRight: 57}}>
            <View>
              {['', ''].map(item => (
                <View
                  style={{
                    width: 220,
                    height: 11,
                    borderRadius: 25,
                    backgroundColor: '#545976',
                    opacity: 0.3,
                    marginBottom: 10,
                  }}>
                  <Animated.View
                    style={{
                      width: '100%',
                      height: '100%',
                      opacity: 0.5,
                      backgroundColor: '#FFF',
                      transform: [{translateX: translateX2}],
                    }}></Animated.View>
                </View>
              ))}
            </View>
          </View>
          <View style={{flex: 0.5}}>
            <View
              style={{
                width: 85,
                height: 85,
                borderRadius: 100,
                backgroundColor: '#F5F7FE',
              }}>
              <Animated.View
                style={{
                  width: '100%',
                  height: '100%',
                  opacity: 0.5,
                  backgroundColor: '#FFF',
                  transform: [{translateX: translateX2}],
                }}></Animated.View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F5F7FE',
            paddingHorizontal: 8,
            paddingVertical: 10,
            padding: 16,
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          {['', ''].map(item => (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}>
              <View
                style={{
                  width: 143,
                  height: 11,
                  backgroundColor: '#545976',
                  opacity: 0.3,
                  borderRadius: 25,
                }}>
                <Animated.View
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#FFF',
                    transform: [{translateX: translateX2}],
                  }}></Animated.View>
              </View>
              <View
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: 'transparent',
                  borderWidth: 1.5,
                  borderColor: '#BDBDBD',
                  borderRadius: 100,
                }}>
                <Animated.View
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#FFF',
                    transform: [{translateX: translateX2}],
                  }}></Animated.View>
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            width: 172,
            height: 28,
            backgroundColor: '#B5F7EB',
            borderRadius: 30,
            alignSelf: 'flex-end',
            marginTop: 10,
            marginRight: 16,
          }}>
          <Animated.View
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.5,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX2}],
            }}></Animated.View>
        </View>
      </View>
    </>
  );
};

export default Skeleton;
