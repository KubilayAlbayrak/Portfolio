import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Linking } from 'react-native';
import SideBar from '../../components/Sidebar/SideBar';
import ToggleHeader from '../../components/ToggleHeader/ToggleHeader';
import { COLOR } from '../../../globalStyles';
import { ToggleHeaderContent } from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BlogScreen = ({ navigation }) => {
  const { height, width, scale } = useWindowDimensions();
  const [toggleHeaderContent, setToggleHeaderContent] = useState<boolean>(true);
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {width >= 1045 && toggleHeaderContent ? (
        <SideBar navigation={navigation} />
      ) : (
        <ToggleHeader
          setToggleHeaderContent={setToggleHeaderContent}
          toggleHeaderContent={toggleHeaderContent}
        />
      )}
      {toggleHeaderContent ? (
        <View style={{ flex: 90.5, backgroundColor: COLOR.mainBackground }}>
          <View style={{ marginTop: hp(20), marginLeft: wp(5) }}></View>
          <Text
            style={{
              color: COLOR.workCardText,
              fontWeight: '700',
              fontSize: hp(1.5),
              maxWidth: width >= 1515 ? '650px' : width * 0.8,
              marginTop: hp(3),
              marginLeft: wp(5),
            }}
          >
            There is no blog post yet.I will start blogging.
            {'\n'}
            {'\n'}
            If you want to stay tuned, you can follow my{' '}
            <Text
              onPress={() =>
                Linking.openURL('https://medium.com/@skubilayalbayrak')
              }
              style={{ color: COLOR.rgbGreen }}
            >
              Medium
            </Text>{' '}
            account.
          </Text>
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

export default BlogScreen;
