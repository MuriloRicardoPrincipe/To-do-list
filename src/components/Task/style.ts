import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#333333',
        borderRadius:8,
        height:64,
        marginTop:8,
        paddingLeft:12,
        paddingBottom:8,
        paddingRight:12,
        paddingTop:12

    },
    TaskDescrition:{
        color:'#F2F2F2',
        fontSize: 14,
        fontWeight: '400'
    }
  });