import React from "react";

import { StyleSheet, Text, View } from 'react-native';

// import MapView, { PROVIDER_GOOGLE } from 'react-native';
// import MapView from "react-native-maps";

import { StatusBar } from "expo-status-bar";


function map({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>jkhjkhkhHLKJHkjdhlk</Text>

            {/* <MapView style={{height: '50%', width: '100'}} />  */}


            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default map;