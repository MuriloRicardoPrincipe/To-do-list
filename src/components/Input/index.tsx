import { TextInput, TextInputProps } from "react-native";
import { styles } from './style';

type Props= TextInputProps&{

}

export function Input({...rest}:Props){
    return(
        <TextInput 
            {...rest}
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
        />
    )
}