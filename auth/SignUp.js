import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButtom from '../share/customBtn';
import {globalStyle} from '../styles/globalStyles';

export default function SignUp({navigation}) {
  return (
    <ScrollView>
      <View style={[globalStyle.mainContainer, styles.container]}>
        <View style={styles.topText}>
          <Text style={styles.text1}>SINAU</Text>
          <Text style={styles.text2}>Learn from anything and anywhere</Text>
        </View>
        <View>
          <View
            style={[
              styles.outerContainer,
              globalStyle.commonPadding,
              globalStyle.commonArea,
            ]}>
            <View style={styles.inputText}>
              <View style={styles.icons} />
              <View>
                <TextInput placeholder="Email" keyboardType="email-address" />
              </View>
            </View>
            <View style={styles.inputText}>
              <View style={styles.icons} />
              <View>
                <TextInput placeholder="Password" secureTextEntry={true} />
              </View>
            </View>
            <View style={styles.SignUpBtn}>
              <CustomButtom
                text="Sign In"
                onPress={() => navigation.navigate('HomeScreen')}
              />
            </View>
            <View style={styles.SignUpWith}>
              <CustomButtom text="Sign In with Google" />
            </View>
            <View>
              <Text style={styles.bottomText}>
                Feel free tro use this UI Kit
              </Text>
              <Text style={styles.bottomText}>© Harum Shidiqi</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  topText: {
    marginTop: 81,
  },
  text1: {
    marginTop: 32,
    fontFamily: 'DMSans-Bold',
    fontSize: 50,
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
  },
  text2: {
    color: '#ffff',
    fontSize: 16,
    fontFamily: 'DMSans-Medium',
    textAlign: 'center',
    marginBottom: 100,
  },
  outerContainer: {
    paddingVertical: 43,
  },
  inputText: {
    backgroundColor: '#ffff',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  icons: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  SignUpBtn: {
    backgroundColor: '#6360FF',
    borderRadius: 10,
    marginBottom: 20,
  },
  SignUpWith: {
    backgroundColor: '#FF8181',
    borderRadius: 10,
    marginBottom: 55,
  },
  bottomText: {
    textAlign: 'center',
    color: '#91919F',
  },
});
