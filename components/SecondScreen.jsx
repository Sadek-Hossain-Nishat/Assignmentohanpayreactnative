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
import CircularplusIcon from '../assets/circularplus';
import FirstScreenFlatList from './FirstScreenFlatList';
import SecondScreenFlatlist from './SecondScreenFlatlist';

const data = [
  {
    uppertext: 'Line height ',
    lowfirst: '-',
    lowsecond: '16',
    lowthird: '+',
  },
  {
    uppertext: 'Paragraph spacing ',
    lowfirst: '-',
    lowsecond: '20',
    lowthird: '+',
  },
  {
    uppertext: 'First line indent ',
    lowfirst: '-',
    lowsecond: '0',
    lowthird: '+',
  },
];

const renderItem = ({item}) => (
  <SecondScreenFlatlist
    uppertext={item.uppertext}
    lowfirst={item.lowfirst}
    lowsecond={item.lowsecond}
    lowthird={item.lowthird}
  />
);

const SecondScreen = ({backWard}) => {
  return (
    <SafeAreaView style={secondscreenstyle.mainContainer}>
      <StatusBar backgroundColor={'#FFF5E4'} barStyle="dark-content" />
      <View style={secondscreenstyle.firstscreenHeader}>
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
          Account
        </Text>
      </View>

      <View style={secondscreenstyle.screentitle}>
        <Text
          style={{
            color: '#3A2337',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 28,
          }}>
          Editor
        </Text>
      </View>

      <View style={secondscreenstyle.listItem}>
        <FlatList data={data} renderItem={renderItem} />
      </View>

      <View style={secondscreenstyle.footerbtn}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            color: '#3A2337',
          }}>
          Check in real time
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,

              color: '#3A2337',
              marginTop: 5,
            }}>
            Lorem ipsum is a pseudo-latin text used in web design, typography,
            layout and printing in place of english to emphasise design element
            over content
          </Text>
          <Text
            style={{
              fontSize: 18,

              color: '#3A2337',
              marginTop: 10,
            }}>
            It's also called placeholder(or filler) text.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondScreen;

const secondscreenstyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF5E4',
    height: '100%',
  },
  screentitle: {
    marginTop: 24,
  },
  listItem: {
    marginTop: 44,
    height: '50%',
  },
  firstscreenHeader: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  footerbtn: {
    borderColor: '#BEBBB5',
    borderStyle: 'dotted',
    flexDirection: 'column',

    marginLeft: 17,
    marginRight: 17,
  },
});
