import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyle} from '../styles/globalStyles';
import {searchStyles} from '../styles/searchStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import translate from 'translate-google-api';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Results({route}) {
  const {params} = route || {};
  const {language} = params;
  // const [icon, setIcon] = useState('home location');

  // useEffect(() => {
  //   console.log('testing');
  //   async function getTranslate() {
  //     const result = await translate("I'm fine.", {
  //       tld: 'cn',
  //       to: 'vi',
  //     });
  //     console.log(result);
  //   }
  //   getTranslate();
  // }, []);

  return (
    <View style={globalStyle.mainContainer}>
      <View style={searchStyles.headerContainer}>
        <View style={searchStyles.innerContainer}>
          <MaterialIcons name="arrow-back-ios" size={15} color="#FCFCFF" />
          <Text style={searchStyles.headerText}>Search Result</Text>
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
        <View>
          <Text>Result for "{language}"</Text>
          <Text>Text 200</Text>
        </View>
      </View>
    </View>
  );
}

// <View>
// <View style={{flexDirection: 'row', alignItems: 'center'}}>
//   <View>
//     <Text>What is your</Text>
//   </View>
//   <View>
//     <Text> {icon}</Text>
//   </View>
// </View>
// <Button
//   title="Change to icon"
//   onPress={() =>
//     setIcon(
//       <View style={{flexDirection: 'row'}}>
//         <Octicons name="home" />
//         <Octicons name="search" style={{paddingLeft: 5}} />
//       </View>,
//     )
//   }
// />
// </View>
