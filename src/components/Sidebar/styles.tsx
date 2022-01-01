import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../globalStyles';

export const styles = StyleSheet.create({
  sideBarLogo: {},
  sideBarLogoView: { position: 'absolute', top: hp(0), marginBottom: hp(10) },
  headerView: {
    backgroundColor: COLOR.headerBackground,
    flexDirection: 'column',
    flex: 9.5,
  },
  headerBarText: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 15,
    alignSelf: 'center',
  },
  headerBarTextHovered: {
    color: COLOR.rgbGreen,
    fontWeight: '600',
    fontSize: 15,
    alignSelf: 'center',
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
