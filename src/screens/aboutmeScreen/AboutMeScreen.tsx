import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Linking } from 'react-native';
import SideBar from '../../components/Sidebar/SideBar';
import ToggleHeader from '../../components/ToggleHeader/ToggleHeader';
import { ToggleHeaderContent } from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../globalStyles';
import * as Progress from 'react-native-progress';
import { WorkCard } from '../../components';
import TypeWriter from 'react-native-typewriter';

const AboutMeScreen = ({ navigation }) => {
  const { height, width, scale } = useWindowDimensions();
  const [toggleHeaderContent, setToggleHeaderContent] = useState<boolean>(true);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLOR.mainBackground,
      }}
    >
      {width >= 1045 && toggleHeaderContent ? (
        <SideBar navigation={navigation} />
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
            marginTop: width >= 1045 ? hp(0) : hp(10),
          }}
        >
          <View
            style={{
              marginTop: width >= 1045 ? hp(20) : hp(0),
              marginLeft: width >= 1045 ? wp(5) : wp(0),
            }}
          ></View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: wp(5) }}>
            <View style={{ flex: 1 }}>
              <TypeWriter
                style={{
                  color: COLOR.rgbGreen,
                  fontWeight: 'bold',
                  fontSize: width >= 1045 ? hp(8) : hp(5),
                }}
                typing={1}
                fixed={true}
              >
                {`My, Myself & I`}
              </TypeWriter>
              <View style={{ maxWidth: (width * 2) / 3 }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: hp(2),
                  }}
                >
                  {'\n'}
                  I’m a Mobile & Front-End Developer located in Izmir,Turkey.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  Actually, I graduated from Yıldız Technical University,
                  Electrical Engineering.After working in electrical engineering
                  for 2 years, my passion for programming has not left me so i
                  started learning React/React-Native and started making
                  personal projects.When I felt competent enough,I started to
                  apply for job postings and I started working as a software
                  engineer in 2021. In my current job, I work on web and mobile
                  projects.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  I’m eager to learn new technologies, self-motivated, problem
                  solving and result oriented team player.
                  {'\n'}
                  {'\n'}
                  Interested in the entire frontend / mobile spectrum and
                  working on ambitious projects with positive people.
                </Text>
              </View>
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

export default AboutMeScreen;
