import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { CartContext } from '../Context/CartContext';

const CartScreen = () => {
  const { cartState, dispatch } = useContext(CartContext);


  return (
    <View className='p-5'>
      {cartState.items.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Button
            title="Increment"
            onPress={() =>
              dispatch({ type: 'INCREMENT_ITEM', payload: item.id })
            }
          />
          <Button
            title="Decrement"
            onPress={() =>
              dispatch({ type: 'DECREMENT_ITEM', payload: item.id })
            }
          />
          <Button
            title="Remove"
            onPress={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
            }
          />
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
