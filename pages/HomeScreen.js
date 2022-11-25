import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Card from '../share/Card';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HomeScreen() {
  return (
    <View style={globalStyle.mainContainer}>
      <View style={styles.imgTag}>
        <View style={styles.image}>
          <Image
            style={styles.img}
            source={require('../assets/c73175f65963d9e50667f9ff1dcfd34f.jpg')}
          />
          <View style={styles.tag}>
            <Text style={styles.welTag}>Welcome back</Text>
            <Text style={[styles.welTag, styles.nameTag]}>
              Prasanna poovelu
            </Text>
          </View>
        </View>
        <View>
          <Fontisto name="bell" size={25} color="#ffff" />
        </View>
      </View>
      <View
        style={[
          globalStyle.commonPadding,
          globalStyle.commonArea,
          styles.container,
        ]}>
        <View style={styles.cardTop}>
          <Card>
            <View>
              <View style={styles.topCard}>
                <View>
                  <Text style={styles.infoText}>
                    Declarative interfaces for any Apple Devices
                  </Text>
                  <Text style={styles.price}>IDR 850.000</Text>
                </View>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#6360FF',
                    borderRadius: 10,
                  }}></View>
              </View>
              <View style={styles.cardBottom}>
                <View style={styles.bottomCard}>
                  <View style={styles.ribbon}>
                    <Entypo name="price-ribbon" size={25} color="#161719" />
                  </View>
                  <View>
                    <Text style={styles.progress}>Current Progress</Text>
                    <Text style={styles.range}>50%</Text>
                  </View>
                </View>
                <View style={styles.bottomCard}>
                  <View style={styles.ribbon}>
                    <Entypo name="price-ribbon" size={25} color="#161719" />
                  </View>
                  <View>
                    <Text style={styles.progress}>Current Progress</Text>
                    <Text style={styles.range}>50%</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bar}>
                <View style={[styles.bar, styles.percentage]}></View>
              </View>
            </View>
          </Card>
        </View>
        <Text style={styles.text}>Recommendation</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgTag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 110,
    paddingHorizontal: 25,
  },
  image: {
    flexDirection: 'row',
  },
  img: {
    width: 40,
    height: 40,
  },
  tag: {
    marginLeft: 20,
  },
  welTag: {
    fontSize: 10,
    fontFamily: 'DMSans-Bold',
    color: '#ffff',
    fontWeight: 'bold',
  },
  nameTag: {
    fontSize: 14,
  },
  container: {
    flex: 1,
  },
  cardTop: {
    marginTop: -80,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'DMSans-Medium',
    color: '#161719',
    maxWidth: 215,
    marginBottom: 6,
  },
  price: {
    fontFamily: 'DMSans-Bold',
    color: '#161719',
    fontWeight: 'bold',
    marginBottom: 18,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 60,
  },
  ribbon: {
    width: 35,
    height: 35,
    backgroundColor: '#F1F1FA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  progress: {
    fontSize: 10,
    color: '#91919F',
    fontFamily: 'DMSans-Medium',
  },
  range: {
    fontFamily: 'DMSans-Medium',
    color: '#161719',
  },
  bar: {
    marginTop: 15,
    height: 15,
    backgroundColor: '#F1F1FA',
    borderRadius: 25,
  },
  percentage: {
    marginTop: 0,
    backgroundColor: '#7DC579',
    width: 50,
  },
  text: {
    fontSize: 14,
    fontFamily: 'DMSans-Bold',
    color: '#161719',
    fontWeight: 'bold',
    marginTop: 20,
  },
});
