import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import navigationStrings from '../utils/routes/navigation/navigationStrings';
import Constants from '../utils/appConstants/appConstants';
import ImageUrls from '../utils/appConstants/imageUrls';
import Header from '../utils/components/Header';
import globalStyles from '../utils/appConstants/GlobalStyles';
import {_renderMsg} from '../utils/commonFunctions/CommonFunctions';
@inject('productStore')
@observer
class shopCart extends Component {
  addAnItem = item => {
    const {productStore} = this.props;
    let id = item.id;
    let shopArray = productStore.dummyProductData?.map(item => {
      if (item.id === id) {
        item.productCount = item.productCount + 1;
        productStore.updateCount(productStore.badgeCount + 1);
      }
      return {...item};
    });
    productStore.updateDummyProductData(shopArray);
  };

  removeAnItem = item => {
    const {productStore} = this.props;
    let id = item.id;
    let shopArray = productStore.dummyProductData?.map(item => {
      if (item.id === id) {
        item.productCount = item.productCount - 1;
        if (item.id === id && item.productCount > 0) {
          productStore.updateCount(productStore.badgeCount - 1);
        }
        if (item.productCount < 1) {
          this.onPressRemoveItem(item);
          item.productCount = 1;
        }
      }
      return {...item};
    });
    productStore.updateDummyProductData(shopArray);
  };

  deleteItems = item => {
    const {productStore} = this.props;
    let id = item.id;
    let filterArray = productStore.dummyProductData?.map(item => {
      if (item.id === id) {
        item.pressed = false;
      }
      return {...item};
    });
    productStore.updateDummyProductData(filterArray);
    productStore.updateCount(productStore.badgeCount - item.productCount);
  };

  deleteItemLengthCheck = item => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0
        ? _renderMsg()
        : this.deleteItems(item);
    }
  };

  addItemLengthCheck = item => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0 ? _renderMsg() : this.addAnItem(item);
    }
  };

  removeItemLengthCheck = item => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0
        ? _renderMsg()
        : this.removeAnItem(item);
    }
  };

  _renderList = () => {
    const {productStore} = this.props;
    const {app_background_color} = globalStyles.colorCodes;
    let itemsList = productStore.dummyProductData?.filter(
      dummyProductData => dummyProductData.pressed == true,
    );
    productStore.updateFlatListArray(itemsList);
    return (
      <View style={styles.flatListContainer(app_background_color)}>
        <FlatList
          data={itemsList}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  listLengthCheck = () => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0 ? _renderMsg() : this._renderList();
    }
  };

  _renderAddressButton = () => {
    const {button_tab_color, button_text_color} = globalStyles.colorCodes;
    const {SAVEDADDRESS} = Constants.ButtonTitle;
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.addressButton(button_tab_color)}
        onPress={() => {
          navigation.navigate(navigationStrings.SAVEDADDRESS);
        }}>
        <Text style={styles.addressButtonTitle(button_text_color)}>
          {SAVEDADDRESS}
        </Text>
      </TouchableOpacity>
    );
  };

  _renderItem = item => {
    const {dustbin} = ImageUrls;
    const {
      flatList_cell_background_color,
      text_color,
      button_text_default_color,
      button_borderColor,
      button_tab_default_color,
    } = globalStyles.colorCodes;
    return (
      <View style={styles.listItem(flatList_cell_background_color)}>
        <Image style={styles.itemsImage} source={{uri: item.image}} />
        <View style={styles.itemTextView}>
          <Text style={styles.itemText(text_color)}>{item.name}</Text>
          <Text>{item.category}</Text>
          <Text>{item.sub_category}</Text>
          <Text>{item.price}</Text>
        </View>
        <View style={styles.deleteButton}>
          <TouchableOpacity
            onPress={() => {
              this.onPressRemoveItem(item);
            }}>
            <Image style={styles.deleteButton} source={dustbin} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.quantityBtn(
            button_borderColor,
            button_tab_default_color,
          )}
          onPress={() => {
            this.removeItemLengthCheck(item);
          }}>
          <Text style={styles.quantityBtnText(button_text_default_color)}>
            {' '}
            -{' '}
          </Text>
        </TouchableOpacity>
        <Text style={styles.quantityCountText}> {item.productCount} </Text>
        <TouchableOpacity
          style={styles.quantityBtn(
            button_borderColor,
            button_tab_default_color,
          )}
          onPress={() => {
            this.addItemLengthCheck(item);
          }}>
          <Text style={styles.quantityBtnText(button_text_default_color)}>
            {' '}
            +{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  onPressRemoveItem = item => {
    const {AlertOnDelete} = Constants.ALERT;
    Alert.alert(
      '',
      AlertOnDelete,
      [
        {text: 'Yes', onPress: () => this.deleteItems(item)},
        {text: 'No', onPress: () => console.log('Item not Deleted')},
      ],
      {cancelable: false},
    );
  };

  render() {
    const {SHOPCART} = Constants.ScreenTitles;
    const {backButton, cart, wishlist} = ImageUrls;
    const {productStore} = this.props;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Header
          left={backButton}
          onButtonPresss={() => navigation.navigate(navigationStrings.SHOP)}
          ScreenTitle={SHOPCART}
          rightSecond={cart}
          onButtonPress={() => navigation.navigate(navigationStrings.SHOPCART)}
          right={wishlist}
          onWishlistButtonPress={() =>
            navigation.navigate(navigationStrings.WISHLIST)
          }
          cartScale={productStore.badgeScale}
          wishlistScale={productStore.badgeWishlistScale}
          cartCount={productStore.badgeCount}
          wishlistCount={productStore.badgeWishlistCount}
        />
        {this._renderList()}
        {this._renderAddressButton()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: app_background_color => ({
    flex: 1,
    backgroundColor: app_background_color,
    marginTop: 30,
  }),
  screenContainer: {
    flex: 1,
  },
  listItem: flatList_cell_background_color => ({
    margin: 10,
    padding: 10,
    backgroundColor: flatList_cell_background_color,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  }),
  itemsImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  itemTextView: {
    flex: 1,
    marginLeft: 20,
  },
  itemText: text_color => ({
    fontWeight: 'bold',
    fontSize: 18,
    color: text_color,
  }),
  deleteButton: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
  quantityCountText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
  },
  quantityBtn: (button_borderColor, button_tab_default_color) => ({
    borderColor: button_borderColor,
    borderWidth: 1,
    borderRadius: 8,
    height: 25,
    width: 37,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: button_tab_default_color,
  }),
  quantityBtnText: button_text_default_color => ({
    fontWeight: 'bold',
    fontSize: 13,
    color: button_text_default_color,
  }),
  addressButton: button_tab_color => ({
    margin: 10,
    backgroundColor: button_tab_color,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
  }),
  addressButtonTitle: button_text_color => ({
    color: button_text_color,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  }),
});

export default shopCart;
