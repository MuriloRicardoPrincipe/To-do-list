import {  TouchableOpacity, TouchableOpacityProps  } from 'react-native';
import { AntDesign } from  '@expo/vector-icons'
import { styles } from './style';

type Props= TouchableOpacityProps&{

}
export default function Button({...rest}:Props) {

  return (
    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <AntDesign
        name='pluscircleo'
        color={'#F2F2F2'}
      />
    </TouchableOpacity> 
  );
}
