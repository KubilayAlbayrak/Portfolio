import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../globalStyles';

export const styles = StyleSheet.create({
  sideBarLogoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    backgroundColor: COLOR.headerBackground,
    flexDirection: 'column',
    flex: 9.5,
  },
  headerBarText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  headerBarTextHovered: {
    color: COLOR.rgbGreen,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  headerBarTextView: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
