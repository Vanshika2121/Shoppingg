import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import globalStyles from "../appConstants/GlobalStyles";

const CustomSubmitButton = (props) => (
  <TouchableOpacity
    style={styles.button(globalStyles.colorCodes.button_tab_color)}
    disabled={props.isDisabled}
    onPress={() => {
      props.onButtonPress();
    }}>
    <Text style={styles.buttonTitle(globalStyles.colorCodes.button_text_color)}>
      {props.buttonTitle}
    </Text>
  </TouchableOpacity>
);

export default CustomSubmitButton;

const styles = StyleSheet.create({
  button: (button_tab_color) => ({
    margin: 10,
    backgroundColor: button_tab_color,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center'
  }),
  buttonTitle: (button_text_color) => ({
    color: button_text_color,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  }),
});