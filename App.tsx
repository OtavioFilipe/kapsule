import React from 'react';
import {StatusBar} from 'react-native';
import CartProvider from './src/context/cartProvider';
import HomeScreen from './src/screens/home';

const App = () => {
  return (
    <CartProvider>
      <StatusBar />
      <HomeScreen />
    </CartProvider>
  );
};

export default App;
