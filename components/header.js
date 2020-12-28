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
        marginTop: 20,
        zIndex:1,
        marginBottom:-70,
        
    },
    logo: {
        width: 200,
        height: 150,
        marginTop:100,
        zIndex:1,
        marginBottom:-225,
    },

});



export default Header;