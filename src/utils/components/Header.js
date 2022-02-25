import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';

const showCartBubbleWhen = props => {
  if (props.cartCount > 0) {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: 15,
          height: 15,
          borderRadius: 30,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'white',
          alignItems: 'center',
          right: 5,
          top: 4,
          backgroundColor: 'red',
          transform: [
            {
              scale: props.cartScale,
            },
          ],
        }}>
        <Text style={styles.badgeText}>{props.cartCount}</Text>
      </Animated.View>
    );
  }
};

const showWishlistBubbleWhen = props => {
  if (props.wishlistCount > 0) {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: 15,
          height: 15,
          borderRadius: 30,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'white',
          alignItems: 'center',
          right: 38,
          backgroundColor: 'red',
          transform: [
            {
              scale: props.wishlistScale,
            },
          ],
        }}>
        <Text style={styles.badgeText}>{props.wishlistCount}</Text>
      </Animated.View>
    );
  }
};

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.leftButtonView}>
        <TouchableOpacity
          onPress={() => {
            props.onButtonPresss();
          }}>
          <Image style={styles.leftButton} source={props.left} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headertext}>{props.ScreenTitle}</Text>
      <View style={styles.rightButtonView}>
        <TouchableOpacity
          onPress={() => {
            props.onWishlistButtonPress();
          }}>
          <Image style={styles.rightButton} source={props.right} />
          {showWishlistBubbleWhen(props)}
        </TouchableOpacity>
        <View style={styles.rightSecondButtonView}>
          <TouchableOpacity
            onPress={() => {
              props.onButtonPress();
            }}>
            <Image style={styles.rightButton} source={props.rightSecond} />
          </TouchableOpacity>
        </View>
      </View>
      {showCartBubbleWhen(props)}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  leftButtonView: {
    flex: 1,
    height: 44,
    width: 44,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    height: 25,
    width: 25,
  },
  headertext: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtonView: {
    flex: 1,
    height: 44,
    width: 88,
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  rightButton: {
    height: 25,
    width: 25,
  },
  rightSecondButtonView: {
    flex: 1,
    height: 44,
    width: 44,
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  badgeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
