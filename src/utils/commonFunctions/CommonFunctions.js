import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import globalStyles from '../appConstants/GlobalStyles';
import Constants from '../appConstants/appConstants';

export const _renderButton = (item, productStore) => {
  return item.pressed
    ? _renderQuantityButton(item, productStore)
    : _renderAddItemButton(item, productStore);
};

export const _renderQuantityButton = (item, productStore) => {
  const {
    button_borderColor,
    button_tab_default_color,
    button_text_default_color,
  } = globalStyles.colorCodes;
  return (
    <View style={styles.quantityButtonView}>
      <TouchableOpacity
        style={styles.quantityBtn(button_borderColor, button_tab_default_color)}
        onPress={() => {
          {
            removeItemLengthCheck(item, productStore);
          }
        }}>
        <Text style={styles.quantityBtnText(button_text_default_color)}>
          {' '}
          -{' '}
        </Text>
      </TouchableOpacity>
      <Text style={styles.quantityCountText}> {item.productCount} </Text>
      <TouchableOpacity
        style={styles.quantityBtn(button_borderColor, button_tab_default_color)}
        onPress={() => {
          {
            addItemLengthCheck(item, productStore);
          }
        }}>
        <Text style={styles.quantityBtnText(button_text_default_color)}>
          {' '}
          +{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const addItemLengthCheck = (item, productStore) => {
  {
    productStore.dummyProductData === 0
      ? _renderMsg()
      : addAnItem(item, productStore);
  }
};

export const addAnItem = (item, productStore) => {
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

export const _renderAddItemButton = (item, productStore) => {
  const {ADDED, ADDITEM} = Constants.ButtonTitle;
  const {button_tab_default_color, button_text_color} = globalStyles.colorCodes;
  return (
    <View style={styles.addItemView}>
      <TouchableOpacity
        style={styles.addItemButton(button_tab_default_color)}
        onPress={animateCartBadge.bind(this, item, productStore)}>
        <Text style={styles.addItemButtonText(button_text_color)}>
          {item.pressed ? ADDED : ADDITEM}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const animateCartBadge = (item, productStore) => {
  {
    productStore.dummyProductData === 0
      ? _renderMsg()
      : renderCartCount(item, productStore);
  }
};

export const renderCartCount = (item, productStore) => {
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

export const _renderItem = (item, _renderWishlistButton, productStore) => {
  const {flatList_cell_background_color, text_color} = globalStyles.colorCodes;
  return (
    <View style={styles.listItem(flatList_cell_background_color)}>
      <Image style={styles.itemsImage} source={{uri: item.image}} />
      <View style={styles.itemTextView}>
        <Text style={styles.itemText(text_color)}>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
      {_renderWishlistButton}
      {_renderButton(item, productStore)}
    </View>
  );
};

export const removeItemLengthCheck = (item, productStore) => {
  {
    productStore.dummyProductData === 0 ? _renderMsg : this.removeAnItem(item);
  }
};

export const removeAnItem = (item, productStore) => {
  let id = item.id;
  let shopArray = productStore.dummyProductData?.map(item => {
    if (item.id === id) {
      item.productCount = item.productCount - 1;
      if (item.id === id && item.productCount > 0) {
        productStore.updateCount(productStore.badgeCount - 1);
      }
      if (item.productCount < 1) {
        item.pressed = false;
        productStore.updateCount(productStore.badgeCount - 1);
        item.productCount = 1;
      }
    }
    return {...item};
  });
  productStore.updateDummyProductData(shopArray);
};

export const _renderMsg = () => {
  const {NODATA} = Constants.MESSAGES;
  console.log("Vanshika")
  return (
    <View style={styles.noDataMsgView}>
      <Text style={styles.noDataMsg}> {NODATA} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: flatList_cell_background_color => ({
    margin: 7,
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
  quantityBtn: (button_borderColor, button_tab_default_color) => ({
    borderColor: button_borderColor,
    borderWidth: 1,
    borderRadius: 8,
    height: 25,
    width: 37,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: button_tab_default_color,
  }),
  quantityBtnText: button_text_default_color => ({
    fontWeight: 'bold',
    fontSize: 13,
    color: button_text_default_color,
  }),
  quantityButtonView: {
    flexDirection: 'row',
    height: 32,
    width: 90,
    position: 'absolute',
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 10,
  },
  quantityCountText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  noDataMsgView: {
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
  noDataMsg: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
