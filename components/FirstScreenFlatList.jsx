import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Text} from 'react-native';
import GlassIcon from '../assets/glassicon';

const FirstScreenFlatList = ({
  themename = 'Default Dark',
  iconcolor = '#E74334',
  titlecolor = '#3A2337',
  firsttextcolor = '#3A2337',
  sfstextcolor = '#0B0B0B',
  undertextcolor = '#E74334',
  fourthbackgroundcolor = '#FFDE69',
  containerbackground = {backgroundColor: '#FFF5E4', borderColor: '#E74334'},
  changePage,
}) => {
  const [modalvisible, setModalvisible] = useState(false);
  const pressEvent = () => {
    setModalvisible(true);
  };
  const toggleModal = () => {
    setModalvisible(!modalvisible);
  };
  return (
    <View>
      <TouchableOpacity onPress={pressEvent}>
        <View style={[flatlistStyle.container, containerbackground]}>
          <View style={flatlistStyle.firstpart}>
            <GlassIcon iconcolor={iconcolor} style={{marginLeft: 17}} />
            <Text
              style={{
                marginLeft: 12,
                color: titlecolor,
                fontSize: 25,
                fontWeight: '600',
              }}>
              {themename}
            </Text>
          </View>
          <View style={flatlistStyle.secondpart}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 20,
                  fontWeight: '600',
                  color: firsttextcolor,
                }}>
                Lorem ipsum{' '}
              </Text>
              <Text style={{fontSize: 20, color: sfstextcolor}}>is a </Text>
              <Text
                style={{
                  fontSize: 20,
                  textDecorationLine: 'underline',
                  textDecorationColor: undertextcolor,
                  color: undertextcolor,
                }}>
                pseudo text{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: sfstextcolor,
                }}>
                used in design to
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 20,
                  backgroundColor: fourthbackgroundcolor,
                  color: {sfstextcolor},
                }}>
                emphasise{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: sfstextcolor,
                }}>
                design elemets over content
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={modalvisible} animationType="fade" transparent={true}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 17,
            marginRight: 17,
            marginTop: '110%',
          }}>
          <TouchableOpacity onPress={changePage}>
            <View
              style={{
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
                backgroundColor: '#FFF5E4',
              }}>
              <Text style={{fontSize: 25, color: '#408CFF', fontWeight: '500'}}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleModal}>
            <View
              style={{
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
                backgroundColor: '#FFF5E4',
              }}>
              <Text style={{fontSize: 25, color: '#F44B60', fontWeight: '500'}}>
                Delete
              </Text>
            </View>

            <View
              style={{
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
                marginTop: 17,
                backgroundColor: '#FFF5E4',
              }}>
              <Text style={{fontSize: 25, color: '#408CFF', fontWeight: '500'}}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default FirstScreenFlatList;

const flatlistStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 2,

    padding: 10,
    marginTop: 17,
    borderRadius: 14,
    marginLeft: 17,
    // marginRight: 17,
  },
  firstpart: {
    paddingRight: 5,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    marginRight: 45,
  },
  secondpart: {
    flexDirection: 'column',
    marginRight: 45,
  },
});
