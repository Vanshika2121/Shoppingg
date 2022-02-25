// import React, { Component } from 'react';
// import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Animated } from 'react-native';
// import Constants from '../../utility/appConstants/appConstants';
// import { observer, inject } from "mobx-react";
// import ImageUrls from '../../utility/appConstants/imageUrls';
// import Header from '../../utility/reusableComponents/Header';
// import navigationStrings from '../../navigation/navigationStrings';
// @inject('productStore')

// @observer
// class Shop extends Component {

//   componentDidMount() {
//     const { productStore } = this.props
//     let flatListArray = productStore.data?.map((item) => {
//       item.pressed = false
//       item.productCount = 1;
//       return { ...item };
//     })
//     productStore.update(flatListArray)
//     productStore.updatePage(0)
//     productStore.isLoading = false;
//     this.addPages(0);
//   }

//   addPages = (page) => {
//     const { productStore } = this.props
//     const otherPosts = []
//     for (var i = page * 10, j = i + 10; i < j && i <
//       productStore.data?.length; i++) {
//       otherPosts.push(productStore.data[i]);
//     }
//     productStore.updateFlatListArray([...productStore.posts, ...otherPosts])
//   }

//   onScroll = () => {
//     const { productStore } = this.props
//     productStore.page = productStore.page + 1,
//       () => {
//         this.addPages(productStore.page);
//       };
//   }

//   animateBadge = (item) => {
//     const { productStore } = this.props
//     let id = item.id
//     let flatListArray = productStore.data?.map((item) => {
//       if (item.id === id) {
//         item.pressed = true
//       }
//       return { ...item }
//     })
//     if (item.pressed === true) {
//       productStore.badgeScale.setValue(0)
//       const newTextValue = ++productStore.badgeCount
//       productStore.updateCount(newTextValue);
//       Animated.timing(productStore.badgeScale, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true
//       }).start()
//     } else {
//       if (item.pressed === false) {
//         productStore.badgeScale.setValue(0)
//         const newTextValue = --productStore.badgeCount
//         productStore.updateCount(newTextValue);
//         Animated.timing(productStore.badgeScale, {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true
//         }).start()
//       }
//     }
//     productStore.update(flatListArray)
//   }

//   _renderList = () => {
//     const { productStore } = this.props
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={{ flex: 1 }}
//           data={productStore.data}
//           initialNumToRender={10}
//           windowSize={10}
//           renderItem={({ item }) => this._renderItem(item)}
//           keyExtractor={item => item.id}
//           onEndReached={this.onScroll}
//           onEndThreshold={0}
//         />
//       </View>
//     )
//   }

//   _renderItem = (item) => {
//     const { ADDED, ADDITEM } = Constants.ButtonTitle
//     return (
//       <View style={styles.listItem}>
//         <Image style={styles.image}
//           source={{ uri: item.image }} />
//         <View style={styles.items}>
//           <Text style={styles.text}>{item.name}</Text>
//           <Text>{item.price}</Text>
//         </View>
//         <TouchableOpacity style={styles.button}
//           onPress={this.animateBadge.bind(this, item)}>
//           <Text style={styles.buttonText}>{item.pressed ? ADDED : ADDITEM}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }

//   render() {
//     const { SHOP } = Constants.ScreenTitles
//     const { hamburger, cart } = ImageUrls
//     const { productStore } = this.props
//     return (
//       <View style={styles.cont}>
//         <Header
//           left={hamburger}
//           onButtonPresss={() => this.props.navigation.toggleDrawer()}
//           ScreenTitle={SHOP}
//           right={cart}
//           onButtonPress={() => this.props.navigation.navigate(navigationStrings.SHOPCART)}
//           scale={productStore.badgeScale}
//           count={productStore.badgeCount} />
//         {this._renderList()}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   cont: {
//     flex: 1
//   },
//   container: {
//     flex: 1,
//     marginTop: 7
//   },
//   listItem: {
//     margin: 7,
//     padding: 10,
//     backgroundColor: "lavender",
//     width: "92%",
//     alignSelf: "center",
//     flexDirection: "row",
//     borderRadius: 5
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 10
//   },
//   items: {
//     flex: 1,
//     marginLeft: 20
//   },
//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//     color: "black"
//   },
//   button: {
//     height: 32,
//     width: 90,
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: 'center',
//     backgroundColor: 'indigo',
//     borderRadius: 5
//   },
//   buttonText: {
//     color: "white"
//   }
// });

// export default Shop;
