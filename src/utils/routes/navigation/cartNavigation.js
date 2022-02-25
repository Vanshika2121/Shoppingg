import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from './navigationStrings';
import {NavigationContainer} from '@react-navigation/native';
import shopCart from '../../../scenes/Cart';
import Apps from './DrawerNavScreen';
import Wishlist from '../../../scenes/Wishlist';
import Address from '../../../scenes/Address';

const Stack = createStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={navigationStrings.APPS}
          component={Apps}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.SHOPCART}
          component={shopCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.WISHLIST}
          component={Wishlist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.ADDRESS}
          component={Address}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
