import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
  TouchableOpacity,
  BackHandler,
  Alert,
  ScrollView,
} from 'react-native';
import BackArrow from '../assets/backarrow';
import CircularplusIcon from '../assets/circularplus';
import {presets} from '../babel.config';
import FirstScreenFlatList from './FirstScreenFlatList';
import FourthScreen from './FourthScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const data = [
  {
    iconcolor: '#E74334',
    titlecolor: '#3A2337',
    firsttextcolor: '#3A2337',
    sfstextcolor: '#0B0B0B',
    undertextcolor: '#E74334',
    fourthbackgroundcolor: '#FFDE69',
    containerbackground: {backgroundColor: '#FFF5E4', borderColor: '#E74334'},
    themename: 'Default',
  },
  {
    iconcolor: '#E74334',
    titlecolor: '#D7C7D4',
    firsttextcolor: '#EFEBEF',
    sfstextcolor: '#EFEBEF',
    undertextcolor: '#E74334',
    fourthbackgroundcolor: '#AA7900',
    containerbackground: {backgroundColor: '#332531', borderColor: '#332531'},
    themename: 'Default Dark',
  },
  {
    iconcolor: '#408CFF',
    titlecolor: '#313131',
    firsttextcolor: '#3A2337',
    sfstextcolor: '#0B0B0B',
    undertextcolor: '#408CFF',
    fourthbackgroundcolor: '#FFF175',
    containerbackground: {backgroundColor: '#F4E7D0', borderColor: '#F4E7D0'},
    themename: 'Classic',
  },
  {
    iconcolor: '#F44B60',
    titlecolor: '#0B1869',
    firsttextcolor: '#000D5F',
    sfstextcolor: '#000D5F',
    undertextcolor: '#F44B60',
    fourthbackgroundcolor: '#FFDE69',
    containerbackground: {backgroundColor: '#F4E7D0', borderColor: '#F4E7D0'},
    themename: 'Space',
  },
  {
    iconcolor: '#AA3EFF',
    titlecolor: '#A383FF',
    firsttextcolor: '#E7EAFF',
    sfstextcolor: '#E7EAFF',
    undertextcolor: '#AA3EFF',
    fourthbackgroundcolor: '#571F55',
    containerbackground: {backgroundColor: '#131619', borderColor: '#131619'},
    themename: 'Spring',
  },
  {
    iconcolor: '#E74334',
    titlecolor: '#508C0B',
    firsttextcolor: '#000730',
    sfstextcolor: '#000730',
    undertextcolor: '#FF5C00',
    fourthbackgroundcolor: '#D5F02B',
    containerbackground: {backgroundColor: '#F4E7D0', borderColor: '#F4E7D0'},
    themename: 'Colorful',
  },
  {
    iconcolor: '#AA3EFF',
    titlecolor: '#0B1D45',
    firsttextcolor: '#09276B',
    sfstextcolor: '#09276B',
    undertextcolor: '#E921E1',
    fourthbackgroundcolor: '#E9CCFF',
    containerbackground: {backgroundColor: '#EFF4FF', borderColor: '#EFF4FF'},
    themename: 'MyTheme#1',
  },
];

const FirstScreen = () => {
  const [pagenumber, setpagenumber] = useState(1);

  const renderItem = ({item}) => (
    <FirstScreenFlatList
      iconcolor={item.iconcolor}
      titlecolor={item.titlecolor}
      firsttextcolor={item.firsttextcolor}
      sfstextcolor={item.sfstextcolor}
      undertextcolor={item.undertextcolor}
      fourthbackgroundcolor={item.fourthbackgroundcolor}
      containerbackground={item.containerbackground}
      themename={item.themename}
      changePage={goPageEdit}
    />
  );

  goPageEdit = () => {
    setpagenumber(3);
    console.log('btn clicked');
  };

  goPageHighlight = () => {
    setpagenumber(4);
  };

  changePage = () => {
    setpagenumber(preState => preState + 1);
  };

  backWard = () => {
    setpagenumber(preState => preState - 1);
  };

  useEffect(() => {
    const backAction = () => {
      pagenumber === 1
        ? // Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          //     {
          //       text: 'Cancel',
          //       onPress: () => null,
          //       style: 'cancel',
          //     },
          //     {text: 'YES', onPress: () => BackHandler.exitApp()},
          //   ])
          BackHandler.exitApp()
        : backWard();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [pagenumber]);

  return pagenumber === 1 ? (
    <SafeAreaView style={firstscreenstyle.mainContainer}>
      <StatusBar backgroundColor={'#FFF5E4'} barStyle="dark-content" />
      <View style={firstscreenstyle.firstscreenHeader}>
        <BackArrow style={{marginLeft: 18}} />

        <Text
          style={{
            marginLeft: 19,

            fontSize: 20,
            fontWeight: '600',
            color: '#AF8E39',
          }}>
          Account
        </Text>
      </View>

      <View style={firstscreenstyle.screentitle}>
        <Text
          style={{
            color: '#3A2337',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 28,
          }}>
          Themes
        </Text>
      </View>

      <View style={firstscreenstyle.listItem}>
        <FlatList data={data} renderItem={renderItem} />
      </View>

      <TouchableOpacity onPress={changePage}>
        <View style={firstscreenstyle.footerbtn}>
          <CircularplusIcon />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#E74334',
              marginLeft: 11,
            }}>
            Create own theme
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  ) : pagenumber === 2 ? (
    <ThirdScreen backWard={backWard} highlightpage={goPageHighlight} />
  ) : pagenumber === 3 ? (
    <SecondScreen backWard={backWard} />
  ) : (
    <FourthScreen />
  );
};

export default FirstScreen;
const firstscreenstyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF5E4',
    height: '100%',
  },
  screentitle: {
    marginTop: 34,
  },
  listItem: {
    marginTop: 64,
    height: '50%',
  },
  firstscreenHeader: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  footerbtn: {
    marginTop: 27,
    borderWidth: 2,
    borderColor: '#BEBBB5',
    borderStyle: 'dotted',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,

    marginTop: 17,
    borderRadius: 14,
    marginLeft: 17,
    marginRight: 17,
  },
});
