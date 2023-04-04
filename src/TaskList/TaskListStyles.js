import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    cardContainer: {
        marginTop: 5,
    },
    card: {
        height: 150,
        width: 350,
        alignSelf:'center', 
        backgroundColor:'#a0a50d',
        marginTop:15,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 20,
    },
    cardText: {
        fontSize:20,
        color: '#e2dec5',
        textAlign:'center',
        fontWeight:'bold',
    },
});
export {Styles};
