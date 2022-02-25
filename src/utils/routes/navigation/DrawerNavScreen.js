import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'mobx-react';
import stores from '../../../stores/stores';
import DrawerNavigate from './drawerNavigation';

class Apps extends Component {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={{flex: 1}}>
          <DrawerNavigate />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default Apps;
