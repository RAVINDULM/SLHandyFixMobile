import react from "react-dom";

import {StyleSheet,Text,View} from 'react-native';

import MapView,{PROVIDER_GOOGLE} from 'react-native';
import { StatusBar } from "expo-status-bar";


function map({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>jkhjkhkhHLKJHkjdhlk</Text>

        <MapView
            style={{height:'50%',width:'1005'}}
            provider={PROVIDER_GOOGLE}
            showUserLocation={true}
        />

        <StatusBar style="auto"/>
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});


export default map;