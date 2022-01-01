import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
  },
  mainScreenLogo: {
    position: 'absolute',
    right: wp(5),
    top: hp(20),
    width: wp(20),
    height: wp(20),
  },
});
