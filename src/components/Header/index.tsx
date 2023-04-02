import {  View, Text, Image,  } from 'react-native';
import { styles } from './style';
import { useState } from 'react';


export default function Header() {

  return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={ require('../../../assets/rocket.png')}
        />
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
    </View> 
  );
}
