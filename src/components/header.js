//all import files
import React from 'react';
import { Text, View } from 'react-native';

//Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle} >{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //'flex-end center flex-start' //postioning in vertical direction
    alignItems: 'center', //postioning in horizontal directions
    height: 60,
    paddingTop: 30,
    shadowColor: '#0  45484',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;
