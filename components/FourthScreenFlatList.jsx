import React from 'react';
import {View, Text} from 'react-native';

const FourthScreenFlatList = ({color, text}) => {
  return (
    <View
      style={{
        height: 50,
        width: 120,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'center',
        backgroundColor: color,
        marginLeft: 10,
        borderRadius: 14,
      }}>
      <Text style={{fontSize: 18, fontWeight: '600'}}>{text}</Text>
    </View>
  );
};

export default FourthScreenFlatList;
