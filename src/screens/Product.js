import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Animated } from 'react-native';
import navigationStrings from '../../navigation/navigationStrings';
import Constants from '../../utility/appConstants';
import { observer, inject } from "mobx-react";
import ImageUrls from '../../utility/imageUrls';
import { makeObservable } from 'mobx';


@inject('productStore')
@observer
class Shop extends Component {
  
  

  componentDidMount() {
    
    let otherPo = this.props.productStore
    console.log('DATA', otherPo.data?.length, otherPo.data)
    let array = otherPo.data?.map((item) => {
      item.pressed = false
      item.k = 1;
      console.log('item', item)
      return { ...item };
      
    })
    
    otherPo.data = array,
      otherPo.page = 0,
      otherPo.isLoading = false,
      function () { this.addPages(0); }
  }

  addPages = (page) => {
    const otherPosts = []
    let otherPo = this.props.productStore
    for (var i = page * 10, j = i + 10; i < j && i <
      otherPo.data.length; i++) {
      otherPosts.push(otherPo.data[i]);
    }
    otherPo.posts = [...otherPo.posts, ...otherPo.otherPosts]

  }

  onScroll = () => {
    let otherPo = this.props.productStore
    otherPo.page = otherPo.page + 1,
      () => {
        this.addPages(otherPo.page);
      };
  }

  returnData = (data) => {
    this.props.productStore.data = data
  }

  animateBadge = (item) => {
    otherPo = this.props.productStore
    let id = item.id
    let array = otherPo.data.map((item, index) => {
      //console.log("id", item.id)
      if (id == index + 1) {
        //console.log("id", this.state.data.id)
        item.pressed = !item.pressed
        item.textValue = 'Item Added'
      }
      return { ...item }

    })

    //console.log("id", this.state.data)
    if (item.pressed == true) {
      otherPo.badgeScale.setValue(0)
      const newTextValue = ++otherPo.i
      otherPo.i = newTextValue
      Animated.timing(otherPo.badgeScale, {
        toValue: 1,
        duration: 500
      }).start()
    } else {
      if (item.pressed == false) {
        otherPo.badgeScale.setValue(0)
        const newTextValue = --otherPo.i
        otherPo.i = newTextValue
        Animated.timing(otherPo.badgeScale, {
          toValue: 1,
          duration: 500
        }).start()
      }
    }
    otherPo.array = array
    otherPo.data = array
    addedArray = array.filter(array => array.pressed == true);
  }

  renderHeader = () => {
    const { SHOP } = Constants.ScreenTitles
    const { cart } = ImageUrls
    otherPo = this.props.productStore
    return (
      <View style={styles.header}>
        <Text style={styles.headertext}>{SHOP}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.SHOPCART, this.returnData())}>
          <View style={styles.img}>
            <Image style={styles.cart}
              source={cart} />
          </View>
        </TouchableOpacity>
        <Animated.View style={{
          position: 'absolute', width: 15, height: 15, borderRadius: 30, justifyContent: 'center', borderWidth: 1,
          borderColor: 'white', alignItems: 'center', right: 0, top: 8, backgroundColor: 'red',
          transform: [
            {
              scale: otherPo.badgeScale
            }
          ]
        }}>
          <Text style={styles.badgeText}>{otherPo.i}</Text>
        </Animated.View>
      </View>
    )
  }

  render() {
    otherPo = this.props.productStore
    
    return (
      <View style={styles.cont}>
        {this.renderHeader()}
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={otherPo.data}
            initialNumToRender={10}
            windowSize={10}
            renderItem={({ item }) =>
              <View style={styles.listItem}>
                <Image style={styles.image}
                  source={{ uri: item.image }} />
                <View style={styles.items}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text>{item.price}</Text>
                  <Text>In Stock: {item.stock}</Text>
                </View>
                <TouchableOpacity style={styles.button}
                  onPress={this.animateBadge.bind(this, item)}>
                  <Text style={styles.buttonText}>{item.pressed ? 'Item Added' : 'Add Item'}</Text>
                </TouchableOpacity>
              </View>
            }
            keyExtractor={item => item.id}
            onEndReached={this.onScroll}
            onEndThreshold={0}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 7
  },
  cont: {
    flex: 1,
    height: 15
  },
  listItem: {
    margin: 7,
    padding: 10,
    backgroundColor: "lavender",
    width: "92%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  items: {
    //alignItems: "stretch",
    flex: 1,
    marginLeft: 20
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
  },
  button: {
    height: 32,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    backgroundColor: 'indigo',
    borderRadius: 5
  },
  buttonText: {
    color: "white"
  },
  headertext: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  header: {
    height: '8%',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cart: {
    height: 30,
    width: 30,
    justifyContent: "center",
    position: 'absolute',
    alignItems: 'flex-end',
    backfaceVisibility: 'hidden'
  },
  img: {
    height: 35,
    width: 35,
    position: 'absolute',
    justifyContent: 'center',
    right: 0,
    top: -27
  },
  badgeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 8
  }

});

export default Shop;



