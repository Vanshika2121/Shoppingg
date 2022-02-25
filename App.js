import React,{Component} from "react";
import{
  SafeAreaView,
} from 'react-native';
import { Provider } from "mobx-react";
import stores from "./src/stores/stores";
import 'react-native-gesture-handler';
import Navigate from "./src/utils/routes/navigation/cartNavigation";

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