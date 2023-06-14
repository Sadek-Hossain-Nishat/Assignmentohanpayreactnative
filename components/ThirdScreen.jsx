import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../assets/backarrow';
import BoldIcon from '../assets/boldicon';
import CalloutIcon from '../assets/callouticon';
import ChecklistIcon from '../assets/checklist';
import DoubleRectwithDashIcon from '../assets/doublerectwithdash';
import HorizontalbarIcon from '../assets/horizontalbaricon';
import ItalicIcon from '../assets/italicicon';
import LinkIcon from '../assets/linkicon';
import RectDashIcon from '../assets/rectangulardash';
import SelectorIcon from '../assets/selectoricon';
import StrikeThroughIcon from '../assets/strikethrough';
import ThirdScreenFlatListicon from './ThirdScreenFlatListicon';

const data1 = [
  {
    marleft: 28,
    marright: 28,
    Icon: RectDashIcon,
    text: 'Bgrnd',
    optionaltext: '',
    circularcolor: '#ffffff',
    yesicon: true,
  },

  {
    marleft: 28,
    marright: 28,
    Icon: RectDashIcon,
    text: 'Bgsmi',
    optionaltext: '',
    circularcolor: '#F4E7D0',
    yesicon: true,
  },
  {
    marleft: 28,
    marright: 28,
    Icon: RectDashIcon,
    text: 'Priacc',
    optionaltext: '',
    circularcolor: '#E74334',
    yesicon: true,
  },
  {
    marleft: 28,
    marright: 28,
    Icon: RectDashIcon,
    text: 'Secacc',
    optionaltext: '',
    circularcolor: '#AF8E39',
    yesicon: true,
  },

  {
    marleft: 28,
    marright: 28,
    Icon: RectDashIcon,
    text: 'Selmark',
    optionaltext: '',
    circularcolor: '#E74334',
    yesicon: true,
  },
];

const data2 = [
  {
    marleft: 20,
    marright: 28,
    alticontext: 'T',
    text: 'Title    ',

    yesicon: false,
  },

  {
    marleft: 20,
    marright: 28,
    alticontext: 'S1',
    text: 'Sbtle ',

    yesicon: false,
  },
  {
    marleft: 20,
    marright: 28,
    alticontext: 'S2',
    text: 'Sbhd2',

    yesicon: false,
  },
  {
    marleft: 20,
    marright: 28,
    alticontext: 'S3',
    text: 'Sbhd3',

    yesicon: false,
  },

  {
    marleft: 20,
    marright: 28,
    alticontext: 'nt',
    text: 'norml',
    optionaltext: 'Apply',

    yesicon: false,
  },
];

const renderItem2 = ({item}) => (
  <ThirdScreenFlatListicon
    marleft={item.marleft}
    marright={item.marright}
    alticontext={item.alticontext}
    text={item.text}
    optionaltext={item.optionaltext}
    yesicon={item.yesicon}
  />
);

const data3 = [
  {
    marleft: 38,
    marright: 28,
    Icon: HorizontalbarIcon,
    text: 'Bullst   ',
    optionaltext: '',

    yesicon: true,
  },

  {
    marleft: 38,
    marright: 28,
    Icon: HorizontalbarIcon,
    text: 'Numlst',
    optionaltext: '',

    yesicon: true,
  },
  {
    marleft: 38,
    marright: 28,
    Icon: ChecklistIcon,
    text: 'Chklst   ',
    optionaltext: '',

    yesicon: true,
  },
  {
    marleft: 38,
    marright: 28,
    Icon: BoldIcon,
    text: 'Bolded   ',
    optionaltext: '',

    yesicon: true,
  },

  {
    marleft: 38,
    marright: 28,
    Icon: ItalicIcon,
    text: 'Italic       ',
    optionaltext: '',

    yesicon: true,
  },

  {
    marleft: 38,
    marright: 28,
    Icon: StrikeThroughIcon,
    text: 'Strike      ',
    optionaltext: '',

    yesicon: true,
  },
];

const renderItem3 = ({item}) => (
  <ThirdScreenFlatListicon
    marleft={item.marleft}
    marright={item.marright}
    Icon={item.Icon}
    text={item.text}
    optionaltext={item.optionaltext}
    yesicon={item.yesicon}
  />
);

const ThirdScreen = ({backWard, highlightpage}) => {
  const data4 = [
    {
      marleft: 28,
      marright: 28,
      Icon: HorizontalbarIcon,
      text: 'Quote     ',
      optionaltext: '',

      yesicon: true,
    },

    {
      marleft: 28,
      marright: 28,
      Icon: LinkIcon,
      text: 'Link          ',
      optionaltext: '',
      circularcolor: '#E74334',
      yesicon: true,
    },
    {
      marleft: 28,
      marright: 28,
      Icon: CalloutIcon,
      text: 'Callout   ',
      optionaltext: '',
      circularcolor: '#8F8C83',
      yesicon: true,
    },

    {
      marleft: 28,
      marright: 28,
      Icon: LinkIcon,
      text: 'Highlight',
      optionaltext: '',
      circularcolor: '#FFDE69',
      yesicon: true,
      gofourthScreen: highlightpage,
    },

    {
      marleft: 28,
      marright: 28,
      Icon: HorizontalbarIcon,
      text: 'Linebreak',
      optionaltext: '',
      circularcolor: '#8F8C83',
      yesicon: true,
    },
  ];

  const renderItem1 = ({item}) => (
    <ThirdScreenFlatListicon
      marleft={item.marleft}
      marright={item.marright}
      Icon={item.Icon}
      text={item.text}
      optionaltext={item.optionaltext}
      circularcolor={item.circularcolor}
      yesicon={item.yesicon}
      gofourthScreen={item.gofourthScreen}
    />
  );
  return (
    <SafeAreaView style={thirdscreenstyle.mainContainer}>
      <StatusBar backgroundColor={'#FFF5E4'} barStyle="dark-content" />

      <View style={thirdscreenstyle.firstscreenHeader}>
        <TouchableOpacity onPress={backWard}>
          <BackArrow style={{marginLeft: 18}} />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 19,

            fontSize: 20,
            fontWeight: '600',
            color: '#AF8E39',
          }}>
          Themes
        </Text>

        <Text
          style={{
            color: '#3A2337',
            fontSize: 30,
            fontWeight: '700',
            marginLeft: 40,
          }}>
          Create
        </Text>
        <Text
          style={{
            color: '#FF5646',
            fontSize: 20,
            fontWeight: '600',
            marginLeft: 40,
            marginRight: 18,
          }}>
          Delete
        </Text>
      </View>
      <Text
        style={{
          color: '#3A2337',
          fontSize: 20,

          marginTop: 5,
          marginLeft: 24,
        }}>
        My Theme #1
      </Text>

      <View style={thirdscreenstyle.screentitle}>
        <Text
          style={{
            color: '#3A2337',
            fontSize: 25,
            fontWeight: '600',
            marginLeft: 24,
          }}>
          General
        </Text>
      </View>

      <View style={thirdscreenstyle.listItem}>
        <FlatList data={data1} renderItem={renderItem1} />
      </View>

      <View style={thirdscreenstyle.screentitle}>
        <Text
          style={{
            color: '#3A2337',
            fontSize: 25,
            fontWeight: '600',
            marginLeft: 24,
          }}>
          Text
        </Text>
      </View>

      <View style={thirdscreenstyle.listItem}>
        <FlatList data={data2} renderItem={renderItem2} />
      </View>

      <View style={thirdscreenstyle.listItem}>
        <FlatList data={data3} renderItem={renderItem3} />
      </View>

      <View style={thirdscreenstyle.screentitle}>
        <Text
          style={{
            color: '#3A2337',
            fontSize: 25,
            fontWeight: '600',
            marginLeft: 24,
          }}>
          Insert
        </Text>
      </View>

      <View style={thirdscreenstyle.listItem}>
        <FlatList data={data4} renderItem={renderItem1} />
      </View>
    </SafeAreaView>
  );
};

export default ThirdScreen;

const thirdscreenstyle = StyleSheet.create({
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

    alignItems: 'center',
    alignContent: 'center',
  },
  footerbtn: {
    borderColor: '#BEBBB5',
    borderStyle: 'dotted',
    flexDirection: 'column',

    marginLeft: 17,
    marginRight: 17,
  },
});
