import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import BlackBallIcon from '../assets/blackball';
import BlackBoxIcon from '../assets/blackbox';
import ColorPickerIcon from '../assets/colorpicker';
import HollowBlackBallIcon from '../assets/hollowblackball';
import HollowBlackBlackIcon from '../assets/hollowblackball';
import SwitchIcon from '../assets/horizontalswitch';
import YellowplusIcon from '../assets/yellowplusicon';
import FourthScreenFlatList from './FourthScreenFlatList';
import FourthScreenFlatlist2 from './FourthScreenFlatlist2';

const data1 = [
  {color: '#ffffff', text: 'Grid'},
  {color: '#f7e6a9', text: 'Specturm'},
  {color: '#f7e6a9', text: 'Sliders'},
];

const renderItme1 = ({item}) => (
  <FourthScreenFlatList color={item.color} text={item.text} />
);
const data2 = [
  {
    Element: BlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },

  {
    Element: HollowBlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },
  {
    Element: BlackBallIcon,
  },
  {
    Element: YellowplusIcon,
  },
];

renderItme2 = ({item}) => <FourthScreenFlatlist2 Element={item.Element} />;

const FourthScreen = () => {
  return (
    <SafeAreaView style={fourthscreenstyle.mainContainer}>
      <StatusBar backgroundColor={'#FFF5E4'} barStyle="dark-content" />

      <View style={fourthscreenstyle.firstscreenHeader}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#AF8E39',
          }}>
          Cancel
        </Text>

        <Text
          style={{
            color: '#3A2337',
            fontSize: 30,
            fontWeight: '600',
          }}>
          Highlight
        </Text>
        <Text
          style={{
            color: '#AF8E39',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Done
        </Text>
      </View>
      <View style={fourthscreenstyle.tabbarstyle}>
        <FlatList data={data1} renderItem={renderItme1} horizontal={true} />
      </View>
      <View style={fourthscreenstyle.colorpickerstyle}>
        <ColorPickerIcon />
      </View>

      <Text
        style={{
          marginTop: 5,
          fontSize: 25,
          fontWeight: '600',
          color: '#3C3C43',
          opacity: 0.6,
          marginLeft: 18,
        }}>
        Opacity
      </Text>

      <View style={fourthscreenstyle.switchstyle}>
        <SwitchIcon />
        <Text style={{color: '#000000', fontSize: 25, fontWeight: '500'}}>
          100%
        </Text>
      </View>
      <View style={fourthscreenstyle.footerpart}>
        <View style={{width: '30%'}}>
          <BlackBoxIcon />
        </View>
        <View style={{marginLeft: 22}}>
          <FlatList data={data2} renderItem={renderItme2} numColumns={5} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FourthScreen;

const fourthscreenstyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF5E4',
    height: '100%',
  },
  screentitle: {
    marginTop: 5,
  },
  listItem: {
    height: 130,
    marginTop: 5,
  },
  firstscreenfirstHeader: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstscreenHeader: {
    flexDirection: 'row',
    marginTop: 5,

    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: 18,
    marginRight: 18,
  },
  footerbtn: {
    borderColor: '#BEBBB5',
    borderStyle: 'dotted',
    flexDirection: 'column',

    marginLeft: 17,
    marginRight: 17,
  },
  tabbarstyle: {
    marginTop: 20,
    marginLeft: 18,
    marginRight: 18,
  },
  colorpickerstyle: {
    marginTop: 24,
    marginRight: 18,
    marginLeft: 18,
  },
  switchstyle: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerpart: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 18,
    marginRight: 18,
  },
});
