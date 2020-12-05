import React from 'react'

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const Header = () => {
    return (
        <>
       
            <View style={styles.container}>
                <Text>Shoot !</Text>
                <Image
                    style={styles.logo}

                    source=
                    {require('../assets/logo.png')}
                />
            </View>
</>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        width: 100,
        height: 100,
    },

});



export default Header;