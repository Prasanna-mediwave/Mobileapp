import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from '../share/Card';
import {homeStyles} from '../styles/homeStyle';

export default function InProgress() {
  const [courses, setCourses] = useState([
    {
      key: 1,
      devices: 'Declarative interfaces for any Apple Devices',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
    {
      key: 2,
      devices: 'Declarative interfaces for any Apple Devices',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
    {
      key: 3,
      devices: 'Declarative interfaces for any Apple Devices',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
    {
      key: 4,
      devices: 'Declarative interfaces for any Apple Devices',
      rating: 4.5,
      createdBy: 'By Sarah William',
      level: 'All Level',
    },
  ]);
  return (
    <View style={[homeStyles.innerContainer, styles.innerContainer]}>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <View style={homeStyles.cardOuter}>
            <Card>
              <View style={homeStyles.cardWarp}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#FF8181',
                    borderRadius: 10,
                  }}
                />
                <View style={homeStyles.innerCard}>
                  <Text style={homeStyles.infoText}>{item.devices}</Text>
                  <View style={homeStyles.detialBar}>
                    <Text style={[homeStyles.progress, homeStyles.rating]}>
                      {item.rating}
                    </Text>
                    <Text style={homeStyles.progress}>.{item.createdBy}</Text>
                    <Text style={homeStyles.progress}>.{item.level}</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  innerContainer: {
    height: '100%',
  },
});
