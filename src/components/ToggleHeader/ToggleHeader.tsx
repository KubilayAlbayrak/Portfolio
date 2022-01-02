import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Pressable,
  Modal,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../../globalStyles';

export type PropsType = {
  setToggleHeaderContent: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHeaderContent: boolean;
  isFocused: boolean;
};

const ToggleHeader: React.FC<PropsType> = ({
  setToggleHeaderContent,
  toggleHeaderContent,
}) => {
  const [iconsChanged, setIconsChanged] = useState(false);

  return (
    <>
      <View style={styles.toggleHeaderView}>
        <Pressable
          onPress={() => {
            setIconsChanged(!iconsChanged);
            setToggleHeaderContent(!toggleHeaderContent);
          }}
        >
          {iconsChanged ? (
            <AntDesign name='close' size={40} color='white' />
          ) : (
            <Octicons name='three-bars' size={40} color='white' />
          )}
        </Pressable>
      </View>
    </>
  );
};

export default ToggleHeader;

const styles = StyleSheet.create({
  toggleHeaderView: {
    position: 'absolute',
    top: hp(2),
    right: wp(2),
    zIndex: 6000,
  },
});
