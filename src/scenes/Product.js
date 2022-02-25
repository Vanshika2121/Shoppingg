import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {observer, inject} from 'mobx-react';
import Header from '../utils/components/Header';
import navigationStrings from '../utils/routes/navigation/navigationStrings';
import Constants from '../utils/appConstants/appConstants';
import ImageUrls from '../utils/appConstants/imageUrls';
import globalStyles from '../utils/appConstants/GlobalStyles';
@inject('productStore')
@observer
class Shop extends Component {
  renderHomeText = () => {
    const {WELCOME} = Constants.MESSAGES;
    return (
      <View style={styles.textView}>
        <Text style={styles.text}> {WELCOME} </Text>
      </View>
    );
  };

  render() {
    const {HOME} = Constants.ScreenTitles;
    const {hamburger, cart, wishlist} = ImageUrls;
    const {productStore} = this.props;
    const {navigation} = this.props;
    const {home_background_color} = globalStyles.colorCodes;
    return (
      <View style={styles.screenContainer(home_background_color)}>
        <Header
          left={hamburger}
          onButtonPresss={() => navigation.toggleDrawer()}
          ScreenTitle={HOME}
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
        {this.renderHomeText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: home_background_color => ({
    flex: 1,
    backgroundColor: home_background_color,
  }),
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
});

export default Shop;
