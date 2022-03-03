import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import Header from '../utils/components/Header';
import navigationStrings from '../utils/routes/navigation/navigationStrings';
import Constants from '../utils/appConstants/appConstants';
import ImageUrls from '../utils/appConstants/imageUrls';
import globalStyles from '../utils/appConstants/GlobalStyles';
@inject('productStore')
@observer
class SavedAddress extends Component {
  _renderSavedLocation = () => {
    const {SAVEDLOC} = Constants.SCREENTEXTS;
    return <Text style={styles.addressTopText}>{SAVEDLOC}</Text>;
  };

  _renderAddressButton = () => {
    const {cancel_button, cancel_text} = globalStyles.colorCodes;
    const {ADDRESS} = Constants.ButtonTitle;
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.addAddressButton(cancel_button)}
        onPress={() => {
          navigation.navigate(navigationStrings.ADDRESS);
        }}>
        <Text style={styles.addAddressButtonTitle(cancel_text)}>{ADDRESS}</Text>
      </TouchableOpacity>
    );
  };

  _renderAddress = item => {
    const {greenTick, greyTick} = ImageUrls;
    return (
      <View style={styles.nameBtns}>
        <Image
          style={styles.tick}
          source={item.addressBtnPressed ? greenTick : greyTick}
        />
        <Text style={styles.name}>{item.user}</Text>
      </View>
    );
  };

  _renderMobile = item => {
    const {phone} = ImageUrls;
    return (
      <View style={styles.phoneBtn}>
        <Image style={styles.phone} source={phone} />
        <Text style={styles.contactText}>{item.phone}</Text>
      </View>
    );
  };

  addressBttnPressed = item => {
    const {productStore} = this.props;
    productStore.addressBtnPressed = !productStore.addressBtnPressed;
    console.log('value', productStore.addressBtnPressed);
    //console.log('id', item.id)
    let id = item.id;
    if (productStore.addressArray?.length !== 0) {
      let updatedAddressArrayList = productStore.addressArray?.map(item => {
        if (item.id === id) {
          item.addressBtnPressed = !item.addressBtnPressed;
        } else {
          item.addressBtnPressed = false;
        }
        return {...item};
      });
      productStore.updateAddress(updatedAddressArrayList);
      //console.log('array',updatedAddressArrayList)
    }
  };

  _renderUsersAddress = item => {
    const {productStore} = this.props;
    const {button_borderColor} = globalStyles.colorCodes;
    return (
      <TouchableOpacity
        style={styles.btnTabs}
        onPress={() => {
          this.addressBttnPressed(item);
        }}>
        {this._renderAddress(item)}
        <Text style={styles.addressText(button_borderColor)}>
          {item.address}
        </Text>
        {this._renderMobile(item)}
      </TouchableOpacity>
    );
  };

  _renderContinueButton = () => {
    const {save_button, button_text_color} = globalStyles.colorCodes;
    const {CONTINUE} = Constants.ButtonTitle;
    const {navigation} = this.props;
    return (
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.continueButton(save_button)}
          onPress={() => {
            navigation.navigate(navigationStrings.SAVEDADDRESS);
          }}>
          <Text style={styles.continueButtonTitle(button_text_color)}>
            {CONTINUE}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderList = () => {
    const {productStore} = this.props;
    return (
      <View style={styles.list}>
        <FlatList
          data={productStore.addressArray}
          renderItem={({item}) => this._renderUsersAddress(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  render() {
    const {backButton} = ImageUrls;
    const {navigation} = this.props;
    const {addressScreen_Background} = globalStyles.colorCodes;
    return (
      <SafeAreaView style={styles.screenContainer(addressScreen_Background)}>
        <Header
          left={backButton}
          onButtonPresss={() => navigation.navigate(navigationStrings.SHOPCART)}
        />
        {this._renderSavedLocation()}
        {this._renderAddressButton()}
        {this.renderList()}
        {this._renderContinueButton()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: addressScreen_Background => ({
    flex: 1,
    backgroundColor: addressScreen_Background,
  }),
  addressTopText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal: 20,
  },
  list: {
    flex: 1,
  },
  bottom: {
    flex: 0.12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  addressText: button_borderColor => ({
    fontSize: 16,
    color: button_borderColor,
    paddingHorizontal: 50,
  }),
  contactText: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  phoneBtn: {
    flexDirection: 'row',
    borderBottomWidth: 0.25,
    padding: 20,
    marginLeft: 30,
  },
  nameBtns: {
    flexDirection: 'row',
    padding: 20,
  },
  tick: {
    height: 20,
    width: 20,
  },
  tickOnPress: onClickTab => ({
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor: onClickTab,
  }),
  phone: {
    height: 20,
    width: 20,
  },
  continueButton: cancel_button => ({
    flex: 1,
    margin: 10,
    backgroundColor: cancel_button,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  }),
  continueButtonTitle: save_button => ({
    color: save_button,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  }),
  addAddressButton: cancel_button => ({
    margin: 10,
    backgroundColor: cancel_button,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
  }),
  addAddressButtonTitle: cancel_text => ({
    color: cancel_text,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  }),
  btnTabs: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 4.7,
  },
});

export default SavedAddress;
