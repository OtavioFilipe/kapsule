import React, {createContext, useState} from 'react';

interface CartProps {
  progress: number;
  count: number | string;
  setProgress: (value: number) => void;
  setCount: (value: number) => void;
  handleUpdateProgress: () => void;
  handleUpdateCount: () => void;
}

export const CartContext = createContext({} as CartProps);

const CartProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [progress, setProgress] = useState(25);

  const [count, setCount] = useState(0);

  function handleUpdateProgress() {
    setProgress(progress + 25);
  }

  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <CartContext.Provider
      value={{
        progress,
        count,
        setProgress,
        setCount,
        handleUpdateProgress,
        handleUpdateCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
