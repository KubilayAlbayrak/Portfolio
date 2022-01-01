import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../globalStyles';

export const styles = StyleSheet.create({
  customButtonView: {
    width: '189px',
    height: '44px',
    borderColor: COLOR.rgbGreen,
    borderWidth: 1,
    backgroundColor: COLOR.mainBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonViewHover: {
    width: '189px',
    height: '44px',
    backgroundColor: COLOR.rgbGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR.rgbGreen,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  buttonTextHover: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: COLOR.mainBackground,
    fontWeight: 'bold',
  },
});
