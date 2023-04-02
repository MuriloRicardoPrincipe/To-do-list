import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from './style';
import { Entypo, Feather } from  '@expo/vector-icons'

type Props ={
    task:string;
    onRemove: () => void;
}
//{task,onConclude,onRemove}:Props

export function TaskConclude({task,onRemove}:Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity >
                <Image
                    source={require('../../../assets/checked.png')}
                />
            </TouchableOpacity>
            <Text style={styles.TaskDescrition}>
                {task}
            </Text>
            <TouchableOpacity onPress={onRemove}>
                <Feather
                    name='trash-2'
                    color='#808080'  
                    size={20}  
                />
            </TouchableOpacity>
        </View>
    )
}