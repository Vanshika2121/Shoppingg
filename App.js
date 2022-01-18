import React,{Component} from "react";
import{
  SafeAreaView,
} from 'react-native';
import Navigate from "./navigation/cartNavigation";
import { Provider } from "mobx-react";
import stores from "./stores/stores";
import 'react-native-gesture-handler';

class App extends Component {
  render() {
  return (
    <Provider {...stores}>
    <SafeAreaView style = {{flex:1}}>
      <Navigate />
    </SafeAreaView>
    </Provider>
  );
};
}

export default App;