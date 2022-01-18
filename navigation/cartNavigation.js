import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from "./navigationStrings";
import Shop from "../src/screens/Product";
import shopCart from "../src/screens/Cart";

const Stack = createStackNavigator();

function Navigate() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "navigationStrings.SHOP">
        <Stack.Screen name = {navigationStrings.SHOP} component = {Shop} options = {{headerShown: false}}/> 
          <Stack.Screen name = {navigationStrings.SHOPCART} component = {shopCart} options = {{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default Navigate