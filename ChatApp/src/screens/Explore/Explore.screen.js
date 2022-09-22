import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import styles from './Explore.styles';
import FastImage from 'react-native-fast-image';
import Button from '../../components/Button/Button.component';
import ExplorePeople from '../ExplorePeople/ExplorePeople.screen';

export default function Explore(props) {
    const Explore=()=>{
        const onPress=()=>{
props.navigation.navigate('ExplorePeople')
        }
        return(
<Button title="Explore" style={styles.exploreButton}  onPress={onPress}/>
        )
    }
 
  return (
    <View style={styles.container}>
      <View style={styles.profileImagesContainer}>
              <FastImage
                  style={styles.profileImagesContainer}
                  source={require('../../Assets/Explore/Explore.png')}
                  resizeMode={FastImage.resizeMode.contain}
              />
      </View>
          <Text style={styles.exploreText}>{'Enjoy new experience with new friends'}</Text>
     <Explore/>
    </View>
  );
}
