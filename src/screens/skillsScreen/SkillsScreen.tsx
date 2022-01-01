import React, { useState, useEffect } from 'react';
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

const SkillsScreen = ({ navigation }) => {
  const { height, width, scale } = useWindowDimensions();
  console.log('WIDTH', width);
  const [progressBarLoading, setProgressBarLoading] = useState<boolean>(true);
  const [toggleHeaderContent, setToggleHeaderContent] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setProgressBarLoading(false);
    }, 1000);
  }, []);

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
        <View style={{ flex: 90.5, backgroundColor: COLOR.mainBackground }}>
          <View
            style={{
              marginTop: width >= 1045 && height > 670 ? hp(20) : hp(10),
              marginLeft: width >= 1045 ? wp(5) : wp(0),
            }}
          ></View>
          <View
            style={
              width >= 1515
                ? { flex: 1, flexDirection: 'row', marginLeft: wp(5) }
                : { flex: 1, flexDirection: 'column', marginLeft: wp(4) }
            }
          >
            <View style={{ flex: 1 }}>
              <TypeWriter
                style={{
                  color: COLOR.rgbGreen,
                  fontWeight: 'bold',
                  fontSize: width >= 1045 ? hp(8) : hp(4),
                }}
                typing={1}
                fixed={true}
              >
                {`Skills &\nExperience`}
              </TypeWriter>
              <View style={{ width: hp(80) }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: hp(1.5),
                    maxWidth: width >= 1515 ? '650px' : width * 0.8,
                    marginTop: hp(3),
                  }}
                >
                  {'\n'}
                  My adventure started in 2020.I started learning Html,Css,Js
                  then I started learning React/React-Native.I started doing
                  clone and personal projects to improve myself in my spare
                  time.
                  {'\n'}
                  {'\n'}
                  At my current job, we develop security and military
                  applications and I work on both mobile and web sides.In these
                  projects, I had the opportunity to focus more on redux and
                  typescript and to improve myself.
                  {'\n'}
                  {'\n'}
                  My future goals are to dig deeper into algorithms, to fully
                  implement clean code,to write great tests.
                  {'\n'}
                  {'\n'}
                  Visit my{' '}
                  <Text
                    onPress={() =>
                      Linking.openURL(
                        'https://www.linkedin.com/in/kubilay-albayrak-193892149/'
                      )
                    }
                    style={{ color: COLOR.rgbGreen }}
                  >
                    Linkedin
                  </Text>{' '}
                  profile for more details or just{' '}
                  <Text
                    onPress={() =>
                      Linking.openURL('mailto:skubilayalbayrak@gmail.com')
                    }
                    style={{ color: COLOR.rgbGreen }}
                  >
                    contact{' '}
                  </Text>
                  me.
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, marginTop: width > 1515 ? hp(0) : hp(0) }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                React JS
              </Text>
              <Progress.Bar
                animated
                indeterminate={progressBarLoading}
                indeterminateAnimationDuration={1000}
                animationType='spring'
                progress={0.7}
                width={width > 621 ? 600 : width * 0.8}
                height={2.5}
                color={COLOR.rgbGreen}
                unfilledColor={COLOR.headerText}
                borderWidth={0}
                style={{ marginBottom: hp(2) }}
              />
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                React Native
              </Text>
              <Progress.Bar
                animated
                indeterminate={progressBarLoading}
                indeterminateAnimationDuration={1000}
                animationType='spring'
                progress={0.9}
                width={width > 621 ? 600 : width * 0.8}
                height={2.5}
                color={COLOR.rgbRed}
                unfilledColor={COLOR.headerText}
                borderWidth={0}
                style={{ marginBottom: hp(2) }}
              />
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                TypeScript
              </Text>
              <Progress.Bar
                animated
                indeterminate={progressBarLoading}
                indeterminateAnimationDuration={1000}
                animationType='spring'
                progress={0.85}
                width={width > 621 ? 600 : width * 0.8}
                height={2.5}
                color={COLOR.rgbPurple}
                unfilledColor={COLOR.headerText}
                borderWidth={0}
                style={{ marginBottom: hp(2) }}
              />
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Redux</Text>
              <Progress.Bar
                animated
                indeterminate={progressBarLoading}
                indeterminateAnimationDuration={1000}
                animationType='spring'
                progress={0.8}
                width={width > 621 ? 600 : width * 0.8}
                height={2.5}
                color={COLOR.rgbGreen}
                unfilledColor={COLOR.headerText}
                borderWidth={0}
              />
              <View
                style={{
                  marginTop: hp(4),
                  marginLeft: width < 1515 ? wp(0) : wp(0),
                }}
              >
                <WorkCard />
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

export default SkillsScreen;
