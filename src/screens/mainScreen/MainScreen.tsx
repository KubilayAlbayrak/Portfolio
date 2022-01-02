import React, { useState, useEffect } from 'react';
import { View, Text, useWindowDimensions, Linking, Image } from 'react-native';
import { COLOR } from '../../../globalStyles';
import {
  Button,
  ToggleHeader,
  Sidebar,
  ToggleHeaderContent,
} from '../../components';
import { styles } from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TypeWriter from 'react-native-typewriter';
const MainScreen = ({ navigation }) => {
  const { height, width, scale } = useWindowDimensions();
  const [toggleHeaderContent, setToggleHeaderContent] = useState<boolean>(true);

  return (
    <View
      style={{
        width: width,
        height: height,
        flexDirection: 'row',
        backgroundColor: COLOR.mainBackground,
      }}
    >
      {width >= 1045 && toggleHeaderContent ? (
        <Sidebar navigation={navigation} />
      ) : (
        <ToggleHeader
          setToggleHeaderContent={setToggleHeaderContent}
          toggleHeaderContent={toggleHeaderContent}
        />
      )}
      {toggleHeaderContent ? (
        <View
          style={{
            flex: 90.5,
            backgroundColor: COLOR.mainBackground,
            marginTop: height >= 670 ? hp(10) : hp(15),
          }}
        >
          <View style={{ backgroundColor: COLOR.mainBackground }}>
            <View
              style={{
                marginTop: width >= 1045 ? hp(20) : hp(15),
                marginLeft: wp(5),
              }}
            >
              <TypeWriter style={styles.text} typing={1} fixed={true}>
                {`Hi,\nI'm Kubilay,\nReact / React-Native Developer`}
              </TypeWriter>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLOR.mainBackground,
            }}
          >
            <View
              style={{
                marginTop: height >= 1045 || height > 670 ? hp(5) : hp(5),
                marginLeft: wp(5),
                marginBottom: height >= 1045 || height > 670 ? hp(0) : hp(5),
                justifyContent: 'center',
              }}
            >
              <Button
                title={'C o n t a c t   M e !'}
                onPressButton={() => {
                  Linking.openURL('mailto:skubilayalbayrak@gmail.com');
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <ToggleHeaderContent
          navigation={navigation}
          setToggleHeaderContent={setToggleHeaderContent}
        />
      )}
    </View>
  );
};

export default MainScreen;
