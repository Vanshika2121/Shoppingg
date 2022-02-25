import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import Header from '../utils/components/Header';
import ImageUrls from '../utils/appConstants/imageUrls';
import navigationStrings from '../utils/routes/navigation/navigationStrings';
import {_renderItem} from '../utils/commonFunctions/CommonFunctions';
import {_renderMsg} from '../utils/commonFunctions/CommonFunctions';
import {
  _renderQuantityButton,
  _renderButton,
  _renderAddItemButton,
} from '../utils/commonFunctions/CommonFunctions';
@inject('productStore')
@observer
class productsList extends Component {
  componentDidMount() {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0
        ? _renderMsg()
        : (flatListArray = productStore.dummyProductData?.map(item => {
            item.pressed = false;
            item.wishlistItemPressed = false;
            item.productCount = 1;
            return {...item};
          }));
      productStore.updateDummyProductData(flatListArray);
    }
  }

  dataAccSubCategory = () => {
    let sub_category = this.props.route?.params?.sub_category || ' ';
    this.props.productStore.updateSubCategory(sub_category);
  };

  renderWishlistCount = item => {
    const {productStore} = this.props;
    let id = item.id;
    if (productStore.dummyProductData.length > 0) {
      let wishlistArray = productStore.dummyProductData?.map(item => {
        if (item.id === id) {
          item.wishlistItemPressed = !item.wishlistItemPressed;
        }
        return {...item};
      });
      productStore.updateDummyProductData(wishlistArray);
      if (item.wishlistItemPressed === true) {
        productStore.badgeWishlistScale.setValue(0);
        const newTextValue = ++productStore.badgeWishlistCount;
        productStore.updateWishlistCount(newTextValue);
        Animated.timing(productStore.badgeWishlistScale, {
          toValue: 1,
          duration: 500,
        }).start();
      } else {
        if (item.wishlistItemPressed === false) {
          productStore.badgeWishlistScale.setValue(0);
          const newTextValue = --productStore.badgeWishlistCount;
          productStore.updateWishlistCount(newTextValue);
          Animated.timing(productStore.badgeWishlistScale, {
            toValue: 1,
            duration: 500,
          }).start();
        }
      }
    }
  };

  animateWislistBadge = item => {
    const {productStore} = this.props;
    {
      productStore.dummyProductData === 0
        ? _renderMsg()
        : this.renderWishlistCount(item);
    }
  };

  _renderWishlistButton = item => {
    const {wishlist} = ImageUrls;
    return (
      <TouchableOpacity onPress={this.animateWislistBadge.bind(this, item)}>
        <Image
          style={
            item.wishlistItemPressed ? styles.wishlistOnPress : styles.wishlist
          }
          source={wishlist}
        />
      </TouchableOpacity>
    );
  };

  _renderList = () => {
    const {productStore} = this.props;
    let itemsList = this.props.productStore.dummyProductData.filter(
      array => array.sub_category === this.props.productStore.sub_category,
    );
    productStore.updateFlatListArray(itemsList);
    return (
      <View style={styles.container}>
        <FlatList
          data={itemsList}
          renderItem={({item}) =>
            _renderItem(item, this._renderWishlistButton(item), productStore)
          }
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

  render() {
    const {cart, backButton, wishlist} = ImageUrls;
    const {productStore} = this.props;
    const {navigation} = this.props;
    {
      this.dataAccSubCategory();
    }
    return (
      <View style={styles.screenContainer}>
        <Header
          left={backButton}
          onButtonPresss={() => navigation.navigate(navigationStrings.SHOP)}
          ScreenTitle={this.props.productStore.sub_category}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 7,
  },
  wishlist: {
    height: 20,
    width: 20,
    right: 0,
    top: 0,
  },
  wishlistOnPress: {
    height: 20,
    width: 20,
    right: 0,
    top: 0,
    tintColor: 'red',
  },
});

export default productsList;
