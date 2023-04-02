import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from './style';
import { Entypo, Feather } from  '@expo/vector-icons'


export function NoTask(){
    return(
        <View style={styles.container}>
            <View style={styles.line}>

            </View>
                <Image
                    source={require('../../../assets/Clipboard.png')}
                />
            <Text style={styles.text1}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text2}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}