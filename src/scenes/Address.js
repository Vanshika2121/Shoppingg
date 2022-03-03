import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Keyboard,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import Header from '../utils/components/Header';
import {Picker} from '@react-native-picker/picker';
import navigationStrings from '../utils/routes/navigation/navigationStrings';
import Constants from '../utils/appConstants/appConstants';
import ImageUrls from '../utils/appConstants/imageUrls';
import globalStyles from '../utils/appConstants/GlobalStyles';
import {FloatingTitleTextInputField} from '../utils/components/TextFields';
import Toast from 'react-native-easy-toast';
@inject('productStore')
@observer
class Address extends Component {
  validateName = name => {
    const {VALIDNAME} = Constants.RGX;
    var valid_name = VALIDNAME;
    return valid_name.test(name);
  };

  validateContact = contact => {
    const {VALIDCONTACT} = Constants.RGX;
    var valid_contact = VALIDCONTACT;
    return valid_contact.test(contact);
  };

  validatePincode = pincode => {
    const {VALIDPINCODE} = Constants.RGX;
    var valid_pincode = VALIDPINCODE;
    return valid_pincode.test(pincode);
  };

  validateLocality = locality => {
    if (locality.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  validateAddress = address => {
    if (address.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  validateState = () => {
    const {productStore} = this.props;
    if (productStore.state === 0 || productStore.state === '') {
      return false;
    } else {
      return true;
    }
  };

  validateCity = city => {
    if (city.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  validateLandmark = landmark => {
    if (landmark.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  onPressSave = () => {
    const {
      NAME,
      CONTACT,
      SAVEADDRESS,
      PINCODE,
      LOCALITY,
      ADDRESS,
      STATE,
      CITY,
      LANDMARK,
    } = Constants.TOASTTEXTS;
    const {productStore} = this.props;
    console.log("state", productStore.state)
    if (!this.validateName(productStore.floatingTitleName)) {
      Keyboard.dismiss();
      this.toast.show(NAME);
      return;
    }
    if (!this.validateContact(productStore.floatingTitleMobile)) {
      Keyboard.dismiss();
      this.toast.show(CONTACT);
      return;
    }
    if (!this.validatePincode(productStore.floatingTitlePincode)) {
      Keyboard.dismiss();
      this.toast.show(PINCODE);
      return;
    }
    if (!this.validateLocality(productStore.floatingTitleLocality)) {
      Keyboard.dismiss();
      this.toast.show(LOCALITY);
      return;
    }
    if (!this.validateAddress(productStore.floatingTitleAddress)) {
      Keyboard.dismiss();
      this.toast.show(ADDRESS);
      return;
    }
    if (!this.validateState(productStore.state)) {
      Keyboard.dismiss();
      this.toast.show(STATE);
      return;
    }
    if (!this.validateCity(productStore.floatingTitleCity)) {
      Keyboard.dismiss();
      this.toast.show(CITY);
      return;
    }
    if (!this.validateLandmark(productStore.floatingTitleLandmark)) {
      Keyboard.dismiss();
      this.toast.show(LANDMARK);
      return;
    } else {
      Keyboard.dismiss();
      this.toast.show(SAVEADDRESS);
    }
  };

  homeBttnPressed = () => {
    const {productStore} = this.props;
    productStore.homeBtnPressed = true;
    if ((productStore.homeBtnPressed = true)) {
      productStore.workBtnPressed = false;
    }
    {
      this.renderAlignBtns();
    }
  };

  workBttnPressed = () => {
    const {productStore} = this.props;
    productStore.workBtnPressed = true;
    if ((productStore.workBtnPressed = true)) {
      productStore.homeBtnPressed = false;
    }
    {
      this.renderAlignBtns();
    }
  };

  // _updateMasterState = () => {
  //   const {productStore} = this.props;
  //   productStore.updateValue(productStore.values);
  // };

  renderAlignBtns = () => {
    const {tick} = ImageUrls;
    const {address_tab_color, text_color, onClickTab} = globalStyles.colorCodes;
    const {HOME, WORK} = Constants.ButtonTitle;
    const {productStore} = this.props;
    return (
      <View style={styles.alignBtns}>
        <TouchableOpacity
          style={
            productStore.homeBtnPressed
              ? styles.btnTabs(address_tab_color)
              : styles.btnTabActivity(text_color)
          }
          onPress={() => {
            this.homeBttnPressed();
          }}>
          <Image
            style={
              productStore.homeBtnPressed
                ? styles.tickOnPress(onClickTab)
                : styles.tick
            }
            source={tick}
          />
          <Text style={styles.textTabs(text_color)}> {HOME} </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            productStore.workBtnPressed
              ? styles.btnTabs(address_tab_color)
              : styles.btnTabActivity(text_color)
          }
          onPress={() => {
            this.workBttnPressed();
          }}>
          <Image
            style={
              productStore.workBtnPressed
                ? styles.tickOnPress(onClickTab)
                : styles.tick
            }
            source={tick}
          />
          <Text style={styles.textTabs(text_color)}> {WORK} </Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderAddressButton = () => {
    const {save_button, button_text_color} = globalStyles.colorCodes;
    const {SAVE} = Constants.ButtonTitle;
    return (
      <TouchableOpacity
        style={styles.saveButton(save_button)}
        onPress={this.onPressSave}>
        <Text style={styles.saveButtonTitle(button_text_color)}>{SAVE}</Text>
      </TouchableOpacity>
    );
  };

  renderAddressUI = () => {
    const {cancel_button, text_color, home_background_color, cancel_text} =
      globalStyles.colorCodes;
    const {CANCEL} = Constants.ButtonTitle;
    const {
      ENTERNAME,
      ENTERMOBILE,
      ENTERPINCODE,
      ENTERLOCALITY,
      ENTERLANDMARK,
      ENTERADDRESS,
      ENTERCITY,
      ENTERALTERNATE,
    } = Constants.Placeholder;
    const {navigation} = this.props;
    const {productStore} = this.props;
    const {ADDRESSTEXT, ADDRESSTITLE, ADDRESSTYPE} = Constants.Title;
    return (
      <ScrollView style={styles.addressScreen}>
        <Text style={styles.addressTitle(text_color)}>{ADDRESSTITLE}</Text>
        <Text style={styles.addressTopText}>{ADDRESSTEXT}</Text>
        <View style={styles.textFields}>
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERNAME}
            onChangeText={text => {
              productStore.floatingTitleName = text;
            }}
            //updateMasterState={this._updateMasterState}
          />
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERMOBILE}
            //updateMasterState={this._updateMasterState}
            onChangeText={text => {
              productStore.floatingTitleMobile = text;
            }}
            keyboardType="numeric"
          />
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERPINCODE}
            //updateMasterState={this._updateMasterState}
            onChangeText={text => {
              productStore.floatingTitlePincode = text;
            }}
            keyboardType="numeric"
          />
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERLOCALITY}
            //updateMasterState={this._updateMasterState}
            onChangeText={text => {
              productStore.floatingTitleLocality = text;
            }}
          />
          <View style={styles.textAddressView}>
            <FloatingTitleTextInputField
              attrName="floatingTitleName"
              title={ENTERADDRESS}
              //updateMasterState={this._updateMasterState}
              onChangeText={text => {
                productStore.floatingTitleAddress = text;
              }}
            />
          </View>
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERCITY}
            //updateMasterState={this._updateMasterState}
            onChangeText={text => {
              productStore.floatingTitleCity = text;
            }}
          />
          <View style={styles.textInputView(home_background_color)}>
            <Picker
              style={styles.pickerView}
              mode="dropdown"
              selectedValue={productStore.state}
              onValueChange={itemValue => productStore.updatestate(itemValue)}>
              {productStore.stateArray.map((item, index) => {
                return (
                  <Picker.Item
                    style={styles.textInputView(home_background_color)}
                    label={item}
                    value={index}
                    key={index}
                    style={styles.textTabs(text_color)}
                  />
                );
              })}
            </Picker>
          </View>
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERLANDMARK}
            //updateMasterState={this._updateMasterState}
            onChangeText={text => {
              productStore.floatingTitleLandmark = text;
            }}
          />
          <FloatingTitleTextInputField
            attrName="floatingTitleName"
            title={ENTERALTERNATE}
            //updateMasterState={this._updateMasterState}
            onChangeText={text => {
              productStore.floatingTitleAlternate = text;
            }}
          />
        </View>
        <Text style={styles.addressType(text_color)}>{ADDRESSTYPE}</Text>
        {this.renderAlignBtns()}
        {this._renderAddressButton()}
        <TouchableOpacity
          style={styles.cancelButton(cancel_button)}
          onPress={() => {
            navigation.navigate(navigationStrings.ADDRESS);
          }}>
          <Text style={styles.cancelButtonTitle(cancel_text)}>{CANCEL}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  render() {
    const {ADDRESS} = Constants.ScreenTitles;
    const {backButton} = ImageUrls;
    const {navigation} = this.props;
    const {addressScreen_Background} = globalStyles.colorCodes;
    return (
      <View style={styles.screenContainer(addressScreen_Background)}>
        <Header
          left={backButton}
          onButtonPresss={() =>
            navigation.navigate(navigationStrings.SAVEDADDRESS)
          }
          ScreenTitle={ADDRESS}
        />
        {this.renderAddressUI()}
        <Toast
          ref={toast => (this.toast = toast)}
          position="bottom"
          positionValue={200}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={5}
          textStyle={{color: 'white'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: addressScreen_Background => ({
    flex: 1,
    backgroundColor: addressScreen_Background,
  }),
  addressScreen: {
    flex: 1,
  },
  addressTitle: text_color => ({
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20,
    color: text_color,
  }),
  addressType: text_color => ({
    marginTop: 26,
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20,
    color: text_color,
  }),
  addressTopText: {
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 2,
  },
  textFields: {
    paddingHorizontal: 20,
  },
  pickerView: {
    borderWidth: 1,
    borderRadius: 8,
  },
  textInputView: home_background_color => ({
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    borderColor: home_background_color,
    borderWidthColor: home_background_color,
    top: 10,
  }),
  tick: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  tickOnPress: onClickTab => ({
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor: onClickTab,
  }),
  alignBtns: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  btnTabs: address_tab_color => ({
    borderColor: address_tab_color,
    marginTop: 25,
    width: Dimensions.get('window').width / 2.75,
    height: Dimensions.get('window').height / 15.75,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  }),
  textTabs: text_color => ({
    fontSize: 16,
    color: text_color,
    alignSelf: 'center',
  }),
  btnTabActivity: text_color => ({
    marginTop: 25,
    width: Dimensions.get('window').width / 2.75,
    height: Dimensions.get('window').height / 15.75,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: text_color,
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  }),
  saveButton: save_button => ({
    margin: 10,
    backgroundColor: save_button,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  }),
  saveButtonTitle: button_text_color => ({
    color: button_text_color,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  }),
  cancelButton: cancel_button => ({
    margin: 10,
    backgroundColor: cancel_button,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
  }),
  cancelButtonTitle: cancel_text => ({
    color: cancel_text,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  }),
});

export default Address;
