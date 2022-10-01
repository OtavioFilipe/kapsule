import React from 'react';
import CartProvider from './src/context/cartProvider';
import HomeScreen from './src/screens/home';

const App = () => {
  return (
    <CartProvider>
      <HomeScreen />
    </CartProvider>
  );
};

export default App;
