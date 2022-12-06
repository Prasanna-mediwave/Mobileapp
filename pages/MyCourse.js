import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {searchStyles} from '../styles/searchStyles';
import InProgress from './InProgress';
import Done from './Done';

export default function SearchCourse() {
  const [tabMenu, setTabMenu] = useState('inprogress');

  return (
    <View style={globalStyle.mainContainer}>
      <View style={searchStyles.headerContainer}>
        <View style={searchStyles.innerContainer}>
          <MaterialIcons name="arrow-back-ios" size={15} color="#FCFCFF" />
          <Text style={searchStyles.headerText}>My Courses</Text>
        </View>
        <View>
          <Feather name="shopping-cart" size={25} color="#FCFCFF" />
        </View>
      </View>
      <View
        style={[
          globalStyle.commonPadding,
          globalStyle.commonArea,
          searchStyles.outerContainer,
        ]}>
        <View style={styles.tabTitle}>
          <TouchableOpacity onPress={() => setTabMenu('inprogress')}>
            <Text
              style={[
                styles.tabText,
                {
                  color: tabMenu === 'inprogress' ? '#161719' : '#91919F',
                },
              ]}>
              InProgress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTabMenu('done')}>
            <Text
              style={[
                styles.tabText,
                {
                  color: tabMenu === 'done' ? '#161719' : '#91919F',
                },
              ]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        {tabMenu === 'inprogress' ? <InProgress /> : <Done />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tabText: {
    fontFamily: 'DMSans-Bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
