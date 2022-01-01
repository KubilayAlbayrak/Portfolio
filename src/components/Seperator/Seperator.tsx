import React from 'react';
import { View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Seperator = () => {
  return (
    <View
      style={{
        flex: 1,
        maxHeight: hp(0.1),
        backgroundColor: '#282828',
      }}
    />
  );
};

export default Seperator;
