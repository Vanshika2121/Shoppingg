import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image,SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import navigationStrings from '../../navigation/navigationStrings';
import Constants from '../../utility/appConstants';
import { inject } from "mobx-react";
import { observer } from 'mobx-react';
import ImageUrls from '../../utility/imageUrls';
import { toJS, makeObservable } from 'mobx';

@inject('productStore')

@observer
class shopCart extends Component {
  
  deleteItems = (item) => {
    let id = item.id
    console.log('id', id)
    let otherPo = this.props.productStore
    let filterArray = otherPo.data.map((item, index) => {
      if (id != index + 1) {
        item.pressed = true
      } else {
        item.pressed = false
      }
      return { ...item };
    })
    otherPo.data = filterArray
    otherPo.i = otherPo.i - 1
    //console.log("value", filterArray)
  }

  plusS = (item) => {
    let id = item.id
    console.log(id)
    let otherPo = this.props.productStore
    let shopArray = this.props.productStore.data?.map((item, index) => {
      if (id == index + 1) {
        item.k = item.k + 1
      }
      return { ...item }
    })
    otherPo.update(shopArray) 
  }

  minusS = (item) => {
    let id = item.id
    let otherPo = this.props.productStore
    let shopArray = otherPo.data.map((item, index) => {
      if (id == index + 1) {
        item.k = item.k - 1
      }
      return { ...item };
    })
    otherPo.data = shopArray
  }

  renderHeader = () => {
    const { SHOPCART } = Constants.ScreenTitles
    const {backButton} = ImageUrls
    return (
      <View style={styles.header}>
        <Text style={styles.headertext}>{SHOPCART}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.SHOP)}>
          <View style={styles.img1}>
            <Image style={styles.cart}
              source={backButton} />
          </View>
        </TouchableOpacity>
      </View>
    )
  };

  render() {
    const {dustbin} = ImageUrls
    let otherPo = this.props.productStore
    //console.log('data',this.props.productStore.array.length)
    let addedArray = otherPo.data.filter(data => data.pressed == true);
    
    return (
      <SafeAreaView style={styles.cont}>
        {this.renderHeader()}
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={addedArray}
            renderItem={({ item }) =>
              //  <Item item={item} />
              <View style={styles.listItem}>
                <Image style={styles.image}
                  source={{ uri: item.image }} />
                <View style={styles.items}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
                <View style = {styles.img}>
                <TouchableOpacity
                  onPress={() => {this.deleteItems.bind(this, item)}}>
                    <Image style={styles.img}
                      source={dustbin} />
                    <View style={styles.butStyles}>
                    
                  </View>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.borderBtn}
                  onPress= {() => {this.minusS(item)}}>
                  <Text style={styles.borderBtnText}> - </Text>
                </TouchableOpacity>
                <Text style={styles.btnText}> {item.k} </Text>
                <TouchableOpacity style={styles.borderBtn}
                  onPress={() => {this.plusS(item)}}>
                  <Text style={styles.borderBtnText}> + </Text>
                </TouchableOpacity>
              </View>
            }
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 30
  },
  cont: {
    flex: 1,
    height: 35
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "lavender",
    width: "90%",
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
    flex: 1,
    marginLeft: 20
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
  },
  button: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
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
  img: {
    height: 20,
    width: 20,
    justifyContent: "center",
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    right: 2,
  },
  cart: {
    height: 30,
    width: 30,
    justifyContent: "center",
    position: 'absolute',
  },
  img1: {
    height: 20,
    width: 20,
    justifyContent: "center",
    position: 'absolute',
    top: -22,
    left: 2
  },
  butStyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 12,
    marginHorizontal: 1,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    height: 14,
    width: 16,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center'
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 9
  },
});

export default shopCart;









