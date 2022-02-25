import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from './navigationStrings';
import Shop from '../../../scenes/Product';
import productsList from '../../../scenes/ProductsList';
import {DrawerContent} from './DrawerContents';

const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={navigationStrings.SHOP}
        component={Shop}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={navigationStrings.PRODUCTSlist}
        component={productsList}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigate;
