import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {searchStyles} from '../styles/searchStyles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SearchCourse() {
  return (
    <View style={globalStyle.mainContainer}>
      <View style={searchStyles.headerContainer}>
        <View style={searchStyles.innerContainer}>
          <MaterialIcons name="arrow-back-ios" size={15} color="#FCFCFF" />
          <Text style={searchStyles.headerText}>Account</Text>
        </View>
      </View>
      <View style={styles.accountWarp}>
        <View>
          <Image
            style={styles.imgSize}
            source={require('../assets/c73175f65963d9e50667f9ff1dcfd34f.jpg')}
          />
        </View>
        <View>
          <Text style={styles.nameText}>Prasanna</Text>
        </View>
        <View>
          <Text style={styles.emailText}>prasanna@mindwaveventures.com</Text>
        </View>
      </View>
      <View
        style={[
          globalStyle.commonPadding,
          globalStyle.commonArea,
          styles.Container,
          searchStyles.outerContainer,
        ]}>
        <Text style={styles.setting}>Account Setting</Text>
        <View>
          <View style={styles.accSetting}>
            <Text style={styles.accText}>Account Security</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#91919F" />
          </View>
          <View style={styles.accSetting}>
            <Text style={styles.accText}>Email notification preferences</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#91919F" />
          </View>
          <View style={styles.accSetting}>
            <Text style={styles.accText}>Learning reminders</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#91919F" />
          </View>
        </View>
        <Text style={styles.setting}>Support</Text>
        <View>
          <View style={styles.accSetting}>
            <Text style={styles.accText}>About Sinau</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#91919F" />
          </View>
          <View style={styles.accSetting}>
            <Text style={styles.accText}>Frequently asked questions</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#91919F" />
          </View>
          <View style={styles.accSetting}>
            <Text style={styles.accText}>Share Sinau app</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#91919F" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgSize: {width: 110, height: 110},
  accountWarp: {
    marginVertical: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#FCFCFF',
  },
  emailText: {
    fontFamily: 'DMSans-Medium',
    color: '#FCFCFF',
  },
  Container: {
    backgroundColor: '#FCFCFF',
  },
  setting: {
    marginTop: 30,
    fontFamily: 'DMSans-Medium',
    fontSize: 10,
    color: '#91919F',
    marginBottom: 16,
  },
  accSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  accText: {
    fontFamily: 'DMSans-Medium',
    fontSize: 14,
    color: '#161719',
  },
});
