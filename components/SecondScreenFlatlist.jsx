import React from 'react';
import {View, Text} from 'react-native';

const SecondScreenFlatlist = ({
  uppertext = 'Line height ',
  lowfirst = '-',
  lowsecond = '20',
  lowthird = '+',
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 20,
        marginLeft: 17,
        marginRight: 17,
        backgroundColor: '#FFFFFF',
      }}>
      <Text style={{color: '#8F8C83', fontSize: 15}}>{uppertext} </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
          marginTop: 10,
        }}>
        <Text style={{color: '#3A2337', fontSize: 20}}>{lowfirst}</Text>
        <Text style={{color: '#3A2337', fontSize: 20}}>{lowsecond} </Text>
        <Text style={{color: '#3A2337', fontSize: 20}}>{lowthird} </Text>
      </View>
    </View>
  );
};

export default SecondScreenFlatlist;
