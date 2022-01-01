import React, { useState } from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
  Linking,
} from 'react-native';
import { Seperator } from '../../components';
import { COLOR } from '../../../globalStyles';
import { styles } from './styles';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {
  NavigationProp,
  ParamListBase,
  useLinkTo,
} from '@react-navigation/native';

export type PropsType = {
  navigation: NavigationProp<ParamListBase>;
  setToggleHeaderContent: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleHeaderContent: React.FC<PropsType> = ({
  navigation,
  setToggleHeaderContent,
}) => {
  const [hoveredMySkills, setHoveredMySkills] = useState(false);
  const [hoveredHome, setHoveredHome] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(false);
  const [hoveredBlog, setHoveredBlog] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const [hoveredGithub, setHoveredGithub] = useState(false);
  const [hoveredTwitter, setHoveredTwitter] = useState(false);
  const [hoveredInstagram, setHoveredInstagram] = useState(false);

  const { height, width, scale } = useWindowDimensions();

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: COLOR.mainBackground,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
        }}
      >
        <Seperator />
        <Pressable
          onHoverIn={() => setHoveredHome(true)}
          onHoverOut={() => setHoveredHome(false)}
          onPress={() => {
            navigation.navigate('Home');
            setToggleHeaderContent(true);
          }}
        >
          <Text
            style={
              hoveredHome ? styles.headerBarTextHovered : styles.headerBarText
            }
          >
            Home
          </Text>
        </Pressable>
        <Seperator />
        <Pressable
          onHoverIn={() => setHoveredAbout(true)}
          onHoverOut={() => setHoveredAbout(false)}
          onPress={() => {
            navigation.navigate('About');
            setToggleHeaderContent(true);
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
            setToggleHeaderContent(true);
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
            setToggleHeaderContent(true);
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Pressable
          onHoverIn={() => setHoveredLinkedin(true)}
          onHoverOut={() => setHoveredLinkedin(false)}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/kubilay-albayrak-193892149/'
            )
          }
          style={{ marginLeft: widthPercentageToDP(3) }}
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
          style={{ marginLeft: widthPercentageToDP(3) }}
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
          style={{ marginLeft: widthPercentageToDP(3) }}
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
          style={{ marginLeft: widthPercentageToDP(3) }}
        >
          <AntDesign
            name='instagram'
            size={20}
            color={hoveredInstagram ? COLOR.rgbGreen : 'gray'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ToggleHeaderContent;
