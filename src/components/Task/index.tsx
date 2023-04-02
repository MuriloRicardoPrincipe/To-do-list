import { TouchableOpacity, View, Text } from "react-native";
import { styles } from './style';
import { Entypo, Feather } from  '@expo/vector-icons'

type Props ={
    task:string;
    onRemove: () => void;
    onConclude: () => void;
}

export function Task({task,onConclude,onRemove}:Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onConclude}>
                <Entypo
                    name='circle'
                    color={'#1E6F9F'}
                    size={20}
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