import React, { useState } from 'react';
import { View, Text, Pressable, useWindowDimensions } from 'react-native';
import ReactCardFlip from 'react-card-flip';
import { styles } from './styles';
import { COLOR } from '../../../globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const WorkCard = () => {
  const [workCardFlipped, setWorkCardFlipped] = useState<boolean>(false);

  const { height, width, scale } = useWindowDimensions();

  return (
    <ReactCardFlip isFlipped={workCardFlipped} flipDirection='vertical'>
      <Pressable
        onPress={() => setWorkCardFlipped(!workCardFlipped)}
        onHoverIn={() => setWorkCardFlipped(true)}
        style={{
          backgroundColor: COLOR.workCardBg,
          width: '288px',
          height: '146px',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          borderRadius: '15px',
        }}
      >
        <Text
          style={{
            color: COLOR.workCardText,
            fontSize: hp(2),
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        >
          React / React-Native{'\n'}
          {'\n'} {'       '} Developer
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setWorkCardFlipped(!workCardFlipped)}
        onHoverOut={() => setWorkCardFlipped(false)}
        style={{
          backgroundColor: COLOR.workCardBg,
          width: '288px',
          height: '146px',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          borderRadius: '15px',
        }}
      >
        <Text
          style={{
            color: COLOR.workCardText,
            fontSize: hp(3),
            fontWeight: '300',
            marginLeft: wp(1),
          }}
        >
          Ete Solutions
        </Text>
        <Text
          style={{
            color: COLOR.workCardText,
            fontSize: hp(2),
            fontWeight: '200',
            marginLeft: wp(1),
          }}
        >
          2021 -
        </Text>
        <Text
          style={{
            color: COLOR.workCardText,
            fontSize: hp(1.5),
            fontWeight: '500',
            marginLeft: wp(1),
          }}
        >
          Working on Web / Mobile side in Security & Military Applications
          Project
        </Text>
      </Pressable>
    </ReactCardFlip>
  );
};

export default WorkCard;
