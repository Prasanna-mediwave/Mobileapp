import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {searchStyles} from '../styles/searchStyles';
import Card from '../share/Card';
import {homeStyles} from '../styles/homeStyle';

export default function SearchCourse({navigation}) {
  const [courses, setCourses] = useState([
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

  const [list, setList] = useState([
    {id: 1, language: 'Technology'},
    {id: 2, language: 'Business'},
    {id: 3, language: 'Finance'},
    {id: 4, language: 'Python'},
    {id: 5, language: 'Programming'},
    {id: 6, language: 'Swift'},
    {id: 7, language: 'React Native'},
  ]);
  return (
    <View style={globalStyle.mainContainer}>
      <View style={searchStyles.headerContainer}>
        <View style={searchStyles.innerContainer}>
          <MaterialIcons name="arrow-back-ios" size={15} color="#FCFCFF" />
          <Text style={searchStyles.headerText}>Explore</Text>
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
        <View style={searchStyles.inputField}>
          <TextInput placeholder="Form placeholder" />
          <Octicons name="search" color="#161719" size={20} />
        </View>
        <View>
          <Text style={searchStyles.browserText}>Browser Category</Text>
        </View>
        <View style={searchStyles.listWarp}>
          {list.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Result', item)}>
              <Text style={searchStyles.listItem}>{item.language}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text style={searchStyles.browserText}>Recommended Courses</Text>
        </View>
        <View style={homeStyles.innerContainer}>
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <View style={homeStyles.cardOuter}>
                <Card>
                  <View style={homeStyles.cardWarp}>
                    <View
                      style={{
                        width: 75,
                        height: 75,
                        backgroundColor: '#FF8181',
                        borderRadius: 10,
                      }}
                    />
                    <View style={homeStyles.innerCard}>
                      <Text style={homeStyles.infoText}>{item.devices}</Text>
                      <Text style={homeStyles.price}>{item.price}</Text>
                      <View style={homeStyles.detialBar}>
                        <Text style={[homeStyles.progress, homeStyles.rating]}>
                          {item.rating}
                        </Text>
                        <Text style={homeStyles.progress}>
                          .{item.createdBy}
                        </Text>
                        <Text style={homeStyles.progress}>.{item.level}</Text>
                      </View>
                    </View>
                  </View>
                </Card>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
