import { useState } from "react";
import { Statusbar } from "expo-status-bar";
import { StyleSheet, View, Button } from 'react-native';
import Clock from "./Componentes/Clock";
import React from 'react';

const App = () => {
    const [on, setON] = useState(false);

    const toggleClock = () => {
        setON(!on);
    };


    return (

        <View style={styles.container}>
            {on && <Clock />}
            <Button
                title={`Turn clock ${ on ? 'OFF' : 'ON' }`}
                onPress={toggleClock}
            />
            <Statusbar style="" />
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});


export default App;