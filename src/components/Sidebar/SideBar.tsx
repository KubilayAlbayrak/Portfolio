import React, { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  Linking,
  Image,
  useWindowDimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../../globalStyles';
import Seperator from '../Seperator/Seperator';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { useLinkTo } from '@react-navigation/native';
import { styles } from './styles';

const SideBar = ({ navigation }) => {
  const linkTo = useLinkTo();
  const { height, width, scale } = useWindowDimensions();

  const [hoveredMySkills, setHoveredMySkills] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(false);
  const [hoveredBlog, setHoveredBlog] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const [hoveredGithub, setHoveredGithub] = useState(false);
  const [hoveredTwitter, setHoveredTwitter] = useState(false);
  const [hoveredInstagram, setHoveredInstagram] = useState(false);

  return (
    <View style={styles.headerView}>
      <View style={{ flex: 2 }}></View>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.sideBarLogoView}
      >
        <Image
          source={require('../../assets/kLogo.png')}
          style={{ width: width * 0.095, height: height * 0.1 }}
        ></Image>
      </Pressable>
      <View style={styles.headerBarTextView}>
        <Seperator />

        <Pressable
          onHoverIn={() => setHoveredAbout(true)}
          onHoverOut={() => setHoveredAbout(false)}
          onPress={() => {
            navigation.navigate('About');
          }}
        >
          <Text
            style={
              hoveredAbout ? styles.headerBarTextHovered : styles.headerBarText
            }
          >
            About
          </Text>
        </Pressable>

        <Seperator />
        <Pressable
          onHoverIn={() => setHoveredMySkills(true)}
          onHoverOut={() => setHoveredMySkills(false)}
          onPress={() => {
            navigation.navigate('Skills');
          }}
        >
          <Text
            style={
              hoveredMySkills
                ? styles.headerBarTextHovered
                : styles.headerBarText
            }
          >
            My Skills
          </Text>
        </Pressable>
        <Seperator />
        <Pressable
          onHoverIn={() => setHoveredBlog(true)}
          onHoverOut={() => setHoveredBlog(false)}
          onPress={() => {
            navigation.navigate('Blog');
          }}
        >
          <Text
            style={
              hoveredBlog ? styles.headerBarTextHovered : styles.headerBarText
            }
          >
            Blog
          </Text>
        </Pressable>
        <Seperator />
      </View>
      <View style={styles.logoView}>
        <Pressable
          onHoverIn={() => setHoveredLinkedin(true)}
          onHoverOut={() => setHoveredLinkedin(false)}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/kubilay-albayrak-193892149/'
            )
          }
        >
          <FontAwesome5
            name='linkedin-in'
            size={20}
            color={hoveredLinkedin ? COLOR.rgbGreen : 'gray'}
          />
        </Pressable>
        <Pressable
          onHoverIn={() => setHoveredGithub(true)}
          onHoverOut={() => setHoveredGithub(false)}
          onPress={() => Linking.openURL('https://github.com/KubilayAlbayrak')}
        >
          <AntDesign
            name='github'
            size={20}
            color={hoveredGithub ? COLOR.rgbGreen : 'gray'}
          />
        </Pressable>
        <Pressable
          onHoverIn={() => setHoveredTwitter(true)}
          onHoverOut={() => setHoveredTwitter(false)}
          onPress={() => Linking.openURL('https://twitter.com/kubilayalbyrk')}
        >
          <AntDesign
            name='twitter'
            size={20}
            color={hoveredTwitter ? COLOR.rgbGreen : 'gray'}
          />
        </Pressable>
        <Pressable
          onHoverIn={() => setHoveredInstagram(true)}
          onHoverOut={() => setHoveredInstagram(false)}
          onPress={() => Linking.openURL('https://instagram.com/kubilayalbyrk')}
        >
          <AntDesign
            name='instagram'
            size={20}
            color={hoveredInstagram ? COLOR.rgbGreen : 'gray'}
          />
        </Pressable>
      </View>
      <View style={{ flex: 2 }}></View>
    </View>
  );
};

export default SideBar;
