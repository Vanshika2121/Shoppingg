// // import React, {Component} from 'react';
// // import {StyleSheet, View, TextInput, Text} from 'react-native';
// // import {observer, inject} from 'mobx-react';
// // import globalStyles from '../appConstants/GlobalStyles';
// // @inject('productStore')
// // @observer
// // class TextInputs extends Component {
// //   componentWillMount() {
// //     const {productStore} = this.props;
// //     this.animatedIsFocused = new this.animatedIsFocused.Value(
// //       productStore.floatingTitle === '' ? 0 : 1,
// //     );
// //   }

// //   handleFocus = () => {
// //     const {productStore} = this.props;
// //     productStore.isFocused = true;
// //     productStore.updateisFocused(productStore.isFocused);
// //   };

// //   handleBlur = () => {
// //     const {productStore} = this.props;
// //     productStore.isFocused = false;
// //     productStore.updateisFocused(productStore.isFocused);
// //   };

// //   componentDidUpdate() {
// //     const {productStore} = this.props;
// //     Animated.timing(this.animatedIsFocused, {
// //       toValue:
// //         productStore.isFocused || productStore.floatingTitle !== '' ? 1 : 0,
// //       duration: 200,
// //     }).start();
// //   }

// //   render() {
// //     const {label, ...props} = this.props;
// //     const {productStore} = this.props;
// //     const {tab_Background, button_text_color} = globalStyles.colorCodes;
// //     const {placeholder, style, onChangeText = () => {}} = this.props;
// //     return (
// //       <View style={styles.textInputView(button_text_color)}>
// //         <Animated.Text
// //           style={styles.labelOnTrueTitle(button_text_color)
// //             // productStore.isFocused
// //             //   ? styles.labelOnTrueTitle(button_text_color)
// //             //   : styles.labelOnFalseTitle(tab_Background)
// //           }>
// //           {label}{' '}
// //         </Animated.Text>
// //         <TextInput
// //           {...props}
// //           style={styles.textFields}
// //           // onChangeText={text => onChangeText(text)}
// //           // onFocus={() => this.handleFocus()}
// //           // onBlur={() => this.handleBlur()}
// //         />
// //       </View>
// //     );
// //   }
// // }
// // export default TextInputs;

// // const styles = StyleSheet.create({
// //   textFields: {
// //     padding: 0,
// //   },
// //   textInputView: button_text_color => ({
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     marginTop: 10,
// //     paddingLeft: 18,
// //     paddingTop: 10,
// //     borderColor: 'grey',
// //     borderWidthColor: 'grey',
// //     backgroundColor: button_text_color,
// //     paddingTop: 14,
// //     top: 16,
// //   }),
// //   labelOnTrueTitle: button_text_color => ({
// //     //fontSize: 14,
// //     flex: 1,
// //     position: 'absolute',
// //     fontSize: this.animatedIsFocused.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [14, 16],
// //     }),
// //     //marginTop: -10,
// //     marginTop: this.animatedIsFocused.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [-10, 0],
// //     }),
// //     left: 18,
// //     paddingBottom: 10,
// //     backgroundColor: button_text_color,
// //   }),
// //   labelOnFalseTitle: tab_Background => ({
// //     fontSize: 16,
// //     backgroundColor: tab_Background,
// //   }),
// // });

import React, {Component} from 'react';
import {View, Animated, StyleSheet, TextInput} from 'react-native';
import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import {string, number, func} from 'prop-types';
import globalStyles from '../appConstants/GlobalStyles';
@inject('productStore')
@observer
export class FloatingTitleTextInputField extends Component {
  @observable position = number;
  static propTypes = {
    attrName: string.isRequired,
    title: string.isRequired,
    value: string.isRequired,
    updateMasterState: func.isRequired,
  };

  constructor(props) {
    super(props);
    //const {productStore} = this.props;
    const {value} = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
  }

  _handleFocus = () => {
    const {productStore} = this.props;
    if (!productStore.isFocused) {
      productStore.isFocused = true;
      Animated.timing(this.position, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
  };

  _handleBlur = () => {
    const {productStore} = this.props;
    if (productStore.isFocused && !this.props.value) {
      productStore.isFocused = false;
      Animated.timing(this.position, {
        toValue: 0,
        duration: 1000,
      }).start();
    }
  };

  // _onChangeText = () => {
  //   //const {productStore} = this.props;
  //   const {attrName, updateMasterState} = this.props;
  //   updateMasterState(attrName, updateValue);
  //   //productStore.updateValue(productStore.value)
  // };

  _returnAnimatedTitleStyles = () => {
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, -10],
      }),
      fontSize: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 13],
      }),
    };
  };

  render() {
    const {text_color, screen_color, button_borderColor} =
      globalStyles.colorCodes;
    return (
      <View style={Styles.container}>
        <Animated.Text
          style={[
            Styles.titleStyles(screen_color, button_borderColor),
            this._returnAnimatedTitleStyles(),
          ]}>
          {' '}
          {this.props.title}{' '}
        </Animated.Text>
        <TextInput
          //value={this.props.value}
          style={Styles.textInputStyles(text_color)}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          underlineColorAndroid="transparent"
          //onChangeText={(text) => onChangeText(text)}
          //onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 15,
    borderRadius: 6,
    borderWidth: 1,
    height: 50,
    marginVertical: 5,
  },
  titleStyles: (screen_color, button_borderColor) => ({
    position: 'absolute',
    left: 18,
    color: button_borderColor,
    backgroundColor: screen_color,
  }),
  textInputStyles: text_color => ({
    color: text_color,
    fontSize: 16,
    left: 18,
  }),
});
