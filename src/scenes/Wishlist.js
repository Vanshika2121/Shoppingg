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
  Animated,
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
class Wishlist extends Component {

  deleteItems = item => {
    const {productStore} = this.props;
    let id = item.id;
    let filterArray = productStore.dummyProductData?.map(item => {
      if (item.id === id) {
        item.wishlistItemPressed = false;
      }
      return {...item};
    });
    productStore.updateDummyProductData(filterArray);
    productStore.updateWishlistCount(productStore.badgeWishlistCount - 1);
  };

  deleteItemLengthCheck = item => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0
        ? _renderMsg()
        : this.deleteItems(item);
    }
  };

  _renderList = () => {
    const {productStore} = this.props;
    const {app_background_color} = globalStyles.colorCodes;
    let itemsList = productStore.dummyProductData?.filter(
      dummyProductData => dummyProductData.wishlistItemPressed == true,
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

  renderCartCount = item => {
    const {productStore} = this.props;
    let id = item.id;
    let flatListArray = productStore.dummyProductData?.map(item => {
      if (item.id === id) {
        item.pressed = true;
      }
      return {...item};
    });
    if (item.pressed === true) {
      productStore.badgeScale.setValue(0);
      const newTextValue = ++productStore.badgeCount;
      productStore.updateCount(newTextValue);
      Animated.timing(productStore.badgeScale, {
        toValue: 1,
        duration: 500,
      }).start();
    } else {
      if (item.pressed === false) {
        productStore.badgeScale.setValue(0);
        const newTextValue = --productStore.badgeCount;
        productStore.updateCount(newTextValue);
        Animated.timing(productStore.badgeScale, {
          toValue: 1,
          duration: 500,
        }).start();
      }
    }
    productStore.updateDummyProductData(flatListArray);
  };

  animateCartBadge = item => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0
        ? _renderMsg()
        : this.renderCartCount(item);
    }
  };

  _renderAddItemButton = item => {
    const {ADDED, ADDTOCART} = Constants.ButtonTitle;
    const {button_tab_default_color, button_text_color} =
      globalStyles.colorCodes;
    return (
      <View style={styles.addItemView}>
        <TouchableOpacity
          style={styles.addItemButton(button_tab_default_color)}
          onPress={this.animateCartBadge.bind(this, item)}>
          <Text style={styles.addItemButtonText(button_text_color)}>
            {item.pressed ? ADDED : ADDTOCART}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderItem = item => {
    const {remove} = ImageUrls;
    const {flatList_cell_background_color, text_color} =
      globalStyles.colorCodes;
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
            <Image style={styles.deleteButton} source={remove} />
          </TouchableOpacity>
        </View>
        {this._renderAddItemButton(item)}
      </View>
    );
  };

  onPressRemoveItem = item => {
    const {AlertOnRemove} = Constants.ALERT;
    Alert.alert(
      '',
      AlertOnRemove,
      [
        {text: 'Yes', onPress: () => this.deleteItems(item)},
        {text: 'No', onPress: () => console.log('Item not Deleted')},
      ],
      {cancelable: false},
    );
  };

  render() {
    const {backButton, cart, wishlist} = ImageUrls;
    const {productStore} = this.props;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Header
          left={backButton}
          onButtonPresss={() => navigation.navigate(navigationStrings.SHOP)}
          ScreenTitle="Wishlist"
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
  addItemView: {
    height: 32,
    width: 90,
    position: 'absolute',
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 10,
  },
  addItemButton: button_tab_default_color => ({
    height: 32,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: button_tab_default_color,
    borderRadius: 8,
  }),
  addItemButtonText: button_text_color => ({
    color: button_text_color,
  }),
});

export default Wishlist;
