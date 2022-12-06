import React, {useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';
import {homeStyles} from '../styles/homeStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Card from '../share/Card';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HomeScreen() {
  const [data, setData] = useState([
    {
      key: 1,
      devices: 'Declarative interfaces for any Apple Devices',
      price: 'IDR 850.000',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
    {
      key: 2,
      devices: 'Declarative interfaces for any Apple Devices',
      price: 'IDR 850.000',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
    {
      key: 3,
      devices: 'Declarative interfaces for any Apple Devices',
      price: 'IDR 850.000',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
    {
      key: 4,
      devices: 'Declarative interfaces for any Apple Devices',
      price: 'IDR 850.000',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
  ]);
  return (
    <>
      <View style={globalStyle.mainContainer}>
        <View style={homeStyles.imgTag}>
          <View style={homeStyles.image}>
            <Image
              style={homeStyles.img}
              source={require('../assets/c73175f65963d9e50667f9ff1dcfd34f.jpg')}
            />
            <View style={homeStyles.tag}>
              <Text style={homeStyles.welTag}>Welcome back</Text>
              <Text style={[homeStyles.welTag, homeStyles.nameTag]}>
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
            homeStyles.container,
          ]}>
          <View style={homeStyles.cardTop}>
            <Card>
              <View>
                <View style={homeStyles.topCard}>
                  <View>
                    <Text style={homeStyles.infoText}>
                      Declarative interfaces for any Apple Devices
                    </Text>
                    <Text style={homeStyles.price}>IDR 850.000</Text>
                  </View>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#6360FF',
                      borderRadius: 10,
                      marginBottom: 18,
                    }}
                  />
                </View>
                <View style={homeStyles.cardBottom}>
                  <View style={homeStyles.bottomCard}>
                    <View style={homeStyles.ribbon}>
                      <Entypo name="price-ribbon" size={25} color="#161719" />
                    </View>
                    <View>
                      <Text style={homeStyles.progress}>Current Progress</Text>
                      <Text style={homeStyles.range}>50%</Text>
                    </View>
                  </View>
                  <View style={homeStyles.bottomCard}>
                    <View style={homeStyles.ribbon}>
                      <Entypo name="price-ribbon" size={25} color="#161719" />
                    </View>
                    <View>
                      <Text style={homeStyles.progress}>Current Progress</Text>
                      <Text style={homeStyles.range}>50%</Text>
                    </View>
                  </View>
                </View>
                <View style={homeStyles.bar}>
                  <View style={[homeStyles.bar, homeStyles.percentage]} />
                </View>
              </View>
            </Card>
          </View>
          <Text style={homeStyles.text}>Recommendation</Text>
          <View style={homeStyles.innerContainer}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View style={homeStyles.cardOuter}>
                  <Card>
                    <View style={homeStyles.cardWarp}>
                      <View>
                        <Text style={homeStyles.infoText}>{item.devices}</Text>
                        <Text style={homeStyles.price}>{item.price}</Text>
                        <View style={homeStyles.detialBar}>
                          <Text
                            style={[homeStyles.progress, homeStyles.rating]}>
                            {item.rating}
                          </Text>
                          <Text style={homeStyles.progress}>
                            .{item.createdBy}
                          </Text>
                          <Text style={homeStyles.progress}>.{item.level}</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: 75,
                          height: 75,
                          backgroundColor: '#FF8181',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </Card>
                </View>
              )}
            />
          </View>
          <View />
        </View>
      </View>
    </>
  );
}
