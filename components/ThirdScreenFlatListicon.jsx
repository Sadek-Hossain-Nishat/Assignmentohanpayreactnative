import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CircularIcon from '../assets/circularicon';
import ForwardArrowIcon from '../assets/forwardarrowicon';
import LinkIcon from '../assets/linkicon';

const ThirdScreenFlatListicon = ({
  marleft,
  marright,
  Icon = LinkIcon,
  text,
  optionaltext = '',
  circularcolor = '#3A2337',
  yesicon,
  alticontext = '',
  gofourthScreen = () => {},
}) => {
  return (
    <TouchableOpacity onPress={gofourthScreen}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: marleft,
          marginRight: marright,
          alignItems: 'center',
          justifyContent: 'space-between',

          marginTop: 10,
        }}>
        {yesicon ? (
          <Icon />
        ) : (
          <Text
            style={{
              color: '#3A2337',
              fontSize: 28,
              marginLeft: 14,
              fontWeight: '600',
            }}>
            {alticontext}
          </Text>
        )}
        <Text style={{color: '#3A2337', fontSize: 20, marginLeft: 14}}>
          {text}
        </Text>
        <Text style={{color: '#E74334', fontSize: 20, marginRight: 20}}>
          {optionaltext}
        </Text>
        <CircularIcon circularcolor={circularcolor} />
        <ForwardArrowIcon />
      </View>
    </TouchableOpacity>
  );
};

export default ThirdScreenFlatListicon;
